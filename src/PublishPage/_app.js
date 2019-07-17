const page = {"_id":"5d2ebc0d19466c6051cc4236","name":"22","description":"222","project":"22","config":{"properties":{"script":{"title":"内联脚本","type":"string"},"scripts":{"items":{"properties":{"src":{"type":"string"}},"title":"脚本地址"},"title":"外链脚本","type":"array"},"style":{"title":"内联样式","type":"string"},"links":{"items":{"properties":{"href":{"title":"href","type":"string"}},"title":"样式表地址"},"title":"外链样式","type":"array"},"metas":{"default":[{"content":"","type":"","name":"name"}],"items":{"properties":{"content":{"type":"string"},"type":{"type":"string"},"name":{"default":"name","enum":["name","http-equiv","itemprop"],"type":"string"}},"title":"meta 标签","type":"object"},"title":"额外的 meta 标签","type":"array"},"author":{"title":"作者","type":"string"},"keywords":{"items":{"title":"关键字","type":"string"},"title":"关键字","type":"array"},"description":{"title":"页面描述","type":"string"},"title":{"title":"页面标题","type":"string"}}},"__v":0,"owner":null,"components":[{"key":0,"_id":"5d2ebed5458578611b08db9d","name":"DownloadPage","config":{"properties":{"iOSUrl":{"title":"iOS 下载文案","type":"string"},"iOSText":{"title":"iOS 下载文案","type":"string"},"androidUrl":{"title":"Android 下载地址","type":"string"},"androidText":{"title":"Android 下载文案","type":"string"},"btnBackgroundColor":{"title":"按钮背景颜色","type":"string"},"backgroundColor":{"title":"页面背景颜色","type":"string"},"logo":{"title":"Logo 地址","type":"string"}},"props":{"iOSUrl":"http://laispace.com","iOSText":"iPhone 下载","androidUrl":"http://laispace.com","androidText":"Android 下载","btnBackgroundColor":"#000","backgroundColor":"#fae100","logo":"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png"},"main":"./Main.js","private":true,"version":"0.0.0","description":"下载页面"},"project":"buluo"}]};

const Coms = [require("../resources/buluo/components/DownloadPage/Main.js")]


import React from "react";
import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";
import ReactDOM from "react-dom";
import Body from "./body";

if (canUseDOM) {
  ReactDOM.render(
    <Body page={page} Coms={Coms} />,
    document.getElementById("publishApp"),
    () => {
      console.log("ReactDOM.render");
    }
  );
}
