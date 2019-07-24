/**
 * 外链url配置
 */

const { PROJECT_ENV } = process.env;

const envMap = {
  dev: {
    DC_URL: 'https://ffp-test.vbillbank.com/lender/common/ServiceAuthorization?MPOS_APP', // 开发环境 MPOS_APP与MPOS_CM渠道不同
    PDF_URL: 'https://lns-wap-test.vbillbank.com/wap', // pdf预览的接口url
    BASE_URL: 'https://lns-wap-test.vbillbank.com'
  },
  test: {
    DC_URL: 'https://ffp-test.vbillbank.com/lender/common/ServiceAuthorization?MPOS_APP',  // 测试环境 MPOS_APP与MPOS_CM渠道不同
    PDF_URL: 'https://lns-wap-test.vbillbank.com/wap', // pdf预览的接口url
    BASE_URL: 'https://lns-wap-test.vbillbank.com'
  },
  pro: {
    DC_URL: 'https://ffp.vbillbank.com/lender/common/ServiceAuthorization?MPOS_APP',  // 生产地址
    PDF_URL: 'https://lns-wap.vbillbank.com/wap', // pdf预览的接口url
    BASE_URL: 'https://lns-wap.vbillbank.com'
  },
  rc: {
    DC_URL: 'https://ffp.vbillbank.com/lender/common/ServiceAuthorization?MPOS_APP',  // 生产地址
    PDF_URL: 'https://lns-wap-rc.vbillbank.com/wap', // pdf预览的接口url
    BASE_URL: 'https://lns-wap-rc.vbillbank.com'
  },
};

export default envMap[PROJECT_ENV];
