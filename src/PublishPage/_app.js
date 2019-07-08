const page = {"_id":"5d1d4253efb17605f11bb0ca","name":"33","description":"3","project":"33","owner":"5d1d4233efb17605f11bb0c8","config":{"properties":{"title":{"type":"string","title":"页面标题"},"description":{"type":"string","title":"页面描述"},"keywords":{"type":"array","title":"关键字","items":{"type":"string","title":"关键字"}},"author":{"type":"string","title":"作者"},"metas":{"type":"array","title":"额外的 meta 标签","items":{"type":"object","title":"meta 标签","properties":{"name":{"type":"string","enum":["name","http-equiv","itemprop"],"default":"name"},"type":{"type":"string"},"content":{"type":"string"}}},"default":[{"name":"name","type":"","content":""}]},"links":{"type":"array","title":"外链样式","items":{"title":"样式表地址","properties":{"href":{"type":"string","title":"href"}}}},"style":{"type":"string","title":"内联样式"},"scripts":{"type":"array","title":"外链脚本","items":{"title":"脚本地址","properties":{"src":{"type":"string"}}}},"script":{"type":"string","title":"内联脚本"}}},"components":[{"__v":0,"config":{"description":"下载页面","version":"0.0.0","private":true,"main":"./Main.js","props":{"logo":"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png","backgroundColor":"#fae100","btnBackgroundColor":"#000","androidText":"Android 下载","androidUrl":"http://laispace.com","iOSText":"iPhone 下载","iOSUrl":"http://laispace.com"},"properties":{"logo":{"default":"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png","type":"string","title":"Logo 地址"},"backgroundColor":{"default":"#fae100","type":"string","title":"页面背景颜色"},"btnBackgroundColor":{"default":"#000","type":"string","title":"按钮背景颜色"},"androidText":{"default":"Android 下载","type":"string","title":"Android 下载文案"},"androidUrl":{"default":"http://laispace.com","type":"string","title":"Android 下载地址"},"iOSText":{"default":"iPhone 下载","type":"string","title":"iOS 下载文案"},"iOSUrl":{"default":"http://laispace.com","type":"string","title":"iOS 下载地址"}}},"name":"DownloadPage","project":"buluo","_id":"5d1d4261efb17605f11bb0cb"}],"__v":0};

const Coms = [require("../resources/buluo/components/DownloadPage/Main.js")]


import React, { PropTypes, Component } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import ReactDOM from 'react-dom';
import Body from './body';


if (canUseDOM) {
  ReactDOM.render(<Body page={page} Coms={Coms}/>, document.getElementById('publishApp'), () => {
    console.log('ReactDOM.render');
  });
}
