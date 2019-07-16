const page = {"_id":"5d2d67065d131b3a09ff0b56","name":"活动1","description":"618活动","project":"测试","config":{"properties":{"script":{"title":"内联脚本","type":"string"},"scripts":{"items":{"properties":{"src":{"type":"string"}},"title":"脚本地址"},"title":"外链脚本","type":"array"},"style":{"title":"内联样式","type":"string"},"links":{"items":{"properties":{"href":{"title":"href","type":"string"}},"title":"样式表地址"},"title":"外链样式","type":"array"},"metas":{"default":[{"content":"","type":"","name":"name"}],"items":{"properties":{"content":{"type":"string"},"type":{"type":"string"},"name":{"default":"name","enum":["name","http-equiv","itemprop"],"type":"string"}},"title":"meta 标签","type":"object"},"title":"额外的 meta 标签","type":"array"},"author":{"title":"作者","type":"string"},"keywords":{"items":{"title":"关键字","type":"string"},"title":"关键字","type":"array"},"description":{"title":"页面描述","type":"string"},"title":{"title":"页面标题","type":"string"}}},"__v":0,"owner":null,"components":[{"key":1,"_id":"5d2d67305d131b3a09ff0b58","name":"Test","config":{"properties":{"cards":{"items":{"properties":{"description":{"default":"11111","description":"描述","type":"string"},"title":{"default":"11111","description":"标题","type":"string"},"src":{"default":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","description":"图片地址","type":"string"},"link":{"default":"http://qq.com/","description":"跳转链接","type":"string"}},"title":"卡片","type":"object"},"format":"table","title":"卡片列表","type":"array"}},"props":{"cards":[{"desc":"描述","title":"名字","src":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","link":"http://11.332.com"},{"description":"描述","title":"名字","src":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","link":"http://11.332.com"}]},"main":"./Main.js","private":true,"version":"0.0.0","description":"二维码卡片"},"project":"buluo"}]};

const Coms = [require("../resources/buluo/components/Test/Main.js")]


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
