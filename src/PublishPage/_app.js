const page = {"_id":"5d1d4253efb17605f11bb0ca","name":"33","description":"3","project":"33","owner":"5d1d4233efb17605f11bb0c8","config":{"props":{"script":"","scripts":[],"style":"","links":[],"metas":[{"content":"","type":"","name":"name"}],"author":"1221","keywords":[],"description":"121","title":"12"},"properties":{"script":{"default":"","title":"内联脚本","type":"string"},"scripts":{"default":[],"items":{"properties":{"src":{"type":"string"}},"title":"脚本地址"},"title":"外链脚本","type":"array"},"style":{"default":"","title":"内联样式","type":"string"},"links":{"default":[],"items":{"properties":{"href":{"title":"href","type":"string"}},"title":"样式表地址"},"title":"外链样式","type":"array"},"metas":{"default":[{"content":"","type":"","name":"name"}],"items":{"properties":{"content":{"type":"string"},"type":{"type":"string"},"name":{"default":"name","enum":["name","http-equiv","itemprop"],"type":"string"}},"title":"meta 标签","type":"object"},"title":"额外的 meta 标签","type":"array"},"author":{"default":"1221","title":"作者","type":"string"},"keywords":{"default":[],"items":{"title":"关键字","type":"string"},"title":"关键字","type":"array"},"description":{"default":"121","title":"页面描述","type":"string"},"title":{"default":"12","title":"页面标题","type":"string"}}},"__v":0,"components":[{"__v":0,"config":{"description":"下载页面","version":"0.0.0","private":true,"main":"./Main.js","props":{"logo":"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png","backgroundColor":"#fae100","btnBackgroundColor":"red","androidText":"Android 下载","androidUrl":"http://laispace.com","iOSText":"iPhone","iOSUrl":"http://laispace.com"},"properties":{"logo":{"default":"http://pub.idqqimg.com/qqun/xiaoqu/mobile/img/app-logo-with-text.png","type":"string","title":"Logo 地址"},"backgroundColor":{"default":"#fae100","type":"string","title":"页面背景颜色"},"btnBackgroundColor":{"default":"red","type":"string","title":"按钮背景颜色"},"androidText":{"default":"Android 下载","type":"string","title":"Android 下载文案"},"androidUrl":{"default":"http://laispace.com","type":"string","title":"Android 下载地址"},"iOSText":{"default":"iPhone","type":"string","title":"iOS 下载文案"},"iOSUrl":{"default":"http://laispace.com","type":"string","title":"iOS 下载文案"}}},"name":"DownloadPage","project":"buluo","_id":"5d1d4261efb17605f11bb0cb"}]};

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
