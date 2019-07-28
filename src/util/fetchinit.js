import fetch from 'sx-fetch';
import Cookie from 'js-cookie';
import { Toast } from 'antd-mobile';
// // import { SXFToast } from 'utils/SXFToast';
import { store } from './store';
import { isWXOpen, pagesIgnore } from './index';
import Raven from 'raven-js';

const fetchInit = () => {
	let num = 0;
	let timer = null;
	let timerList = [];
	fetch.init({
		timeout: 10000, // 默认超时
		baseURL: '/wap', // baseurl
		onShowErrorTip: (err, errorTip) => {
			console.log(err);
			setTimeout(() => {
				if (errorTip) Toast.fail('系统开小差，请稍后重试');
			}, 0);
		},
		onShowSuccessTip: (response, successTip) => {
			switch (response.data.msgCode) {
				case 'PTM0000':
					return;
				case 'PTM1000': // 用户登录超时
					// Raven.captureException(response.config.url, { extra: {code: 'PTM1000',msgInfo:'登录超时，请重新登陆'}, level: 'info' });
					if (pagesIgnore(window.location.pathname)) {
						return;
					}
					Toast.info('登录超时，请重新登陆');
					setTimeout(() => {
						window.ReactRouterHistory.replace('/login');
					}, 3000);
					return;
				case 'PTM0100': // 未登录
					Raven.captureException(response.config.url, {
						extra: { code: 'PTM0100', msgInfo: '未登录' },
						level: 'info'
					});
					if (pagesIgnore(window.location.pathname)) {
						return;
					}
					Toast.info('请先登录');
					setTimeout(() => {
						window.ReactRouterHistory.replace('/login');
					}, 3000);
					return;
				default:
			}
		}
	});
	// 拦截请求
	fetch.axiosInstance.interceptors.request.use(
		(cfg) => {
			// 非微信去掉 fn-v-card-token-wechat
			if (!isWXOpen()) {
				Cookie.remove('fin-v-card-token-wechat');
			}
			// const TOKEN = Cookie.get('fin-v-card-token');
			// TODO: 这里tocken 不能从 cookie 取值 因为目前它永远有效
			let tokenFromStorage = '';
			tokenFromStorage = store.getToken();
			if (tokenFromStorage && !location.pathname.indexOf('activity') > -1) {
				cfg.headers['fin-v-card-token'] = tokenFromStorage;
			} else if (location.pathname.indexOf('activity') > -1) {
				cfg.headers['fin-v-card-token'] = Cookie.get('fin-v-card-token');
			} else {
				cfg.headers['fin-v-card-token'] = '';
			}
			// 设置 图片验证码 noLoginToken
			let noLoginToken = store.getNoLoginToken();
			if (noLoginToken) {
				cfg.headers['fin-v-card-token-not-login'] = noLoginToken;
			}
			num++;
			if (!cfg.hideLoading) {
				// 防止时间短，出现loading 导致闪烁
				timer = setTimeout(() => {
					// 处理多个请求，只要一个loading
					if (timerList.length > 1) {
						return;
					}
					// SXFToast.loading('数据加载中...', 10);
				}, 300);
				timerList.push(timer);
			}
			return cfg;
		},
		(error) => {
			Promise.reject(error);
		}
	);
	// 拦截响应
	fetch.axiosInstance.interceptors.response.use(
		(response) => {
			num--;
			if (num <= 0) {
				if (timer) {
					for (let i = 0; i < timerList.length; i++) {
						clearTimeout(timerList[i]);
					}
					timer = null;
					timerList = [];
					// SXFToast.hide();
				}
			} else {
				// SXFToast.loading('数据加载中...', 10);
			}
			return response;
		},
		(error) => {
			// 有响应则取status,statusText，超时则取error.message
			try {
				console.log('----异常日志----');
				if (error.response) {
					Raven.captureException(error, { extra: error.response });
				} else if (error.config) {
					Raven.captureException(error, { extra: error.config });
				}
			} catch (err) {
				// console.log(err)
			}

			num--;
			for (let i = 0; i < timerList.length; i++) {
				clearTimeout(timerList[i]);
			}
			timer = null;
			timerList = [];
			// SXFToast.hide();
			console.log(error, 'error.response');
			let error2 =
				error && error.message && error.message.canceled ? error : new Error('系统开小差，请稍后重试');
			return Promise.reject(error2);
		}
	);
};

export default fetchInit;
