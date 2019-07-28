const page = {"_id":"5d3acfcb16e184ac4554b0b0","name":"1","description":"3","project":"2","config":{"properties":{"title":{"type":"string","title":"页面标题"},"description":{"type":"string","title":"页面描述"},"keywords":{"type":"array","title":"关键字","items":{"type":"string","title":"关键字"}},"author":{"type":"string","title":"作者"},"metas":{"type":"array","title":"额外的 meta 标签","items":{"type":"object","title":"meta 标签","properties":{"name":{"type":"string","enum":["name","http-equiv","itemprop"],"default":"name"},"type":{"type":"string"},"content":{"type":"string"}}},"default":[{"name":"name","type":"","content":""}]},"links":{"type":"array","title":"外链样式","items":{"title":"样式表地址","properties":{"href":{"type":"string","title":"href"}}}},"style":{"type":"string","title":"内联样式"},"scripts":{"type":"array","title":"外链脚本","items":{"title":"脚本地址","properties":{"src":{"type":"string"}}}},"script":{"type":"string","title":"内联脚本"}}},"__v":0,"owner":null,"components":[{"project":"activity","config":{"description":"头像卡片列表","version":"0.0.0","private":true,"main":"./Main.js","props":{"imgWidth":"60px","imgHeight":"60px","imgCountsPerLine":4,"imgs":[{"link":"http://11.332.com","src":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","title":"名字"},{"link":"http://11.332.com","src":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","title":"名字"},{"link":"http://11.332.com","src":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","title":"名字"},{"link":"http://11.332.com","src":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg","title":"名字"}]},"properties":{"imgWidth":{"type":"string","title":"头像宽度","default":"60px"},"imgHeight":{"type":"string","title":"头像高度","default":"60px"},"imgCountsPerLine":{"type":"number","title":"每行几个卡片","default":4},"imgs":{"type":"array","title":"卡片列表","format":"table","items":{"type":"object","title":"卡片","properties":{"link":{"type":"string","description":"跳转链接","default":"http://qq.com/"},"src":{"type":"string","description":"头像地址","default":"https://s-media-cache-ak0.pinimg.com/736x/f5/c3/95/f5c39586fa787a5b1f210ada6f584b24.jpg"},"title":{"type":"string","description":"文案","default":"11111"}}}}}},"name":"mianxitest_page","_id":"5d3acfda16e184ac4554b0b1","key":0}]};

const Coms = [require("../resources/activity/components/mianxitest_page/Main.js")]


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
