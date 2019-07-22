const page = {"_id":"5d3424a7b9fee88a8d35b886","name":"1","description":"1","project":"1","config":{"properties":{"title":{"type":"string","title":"页面标题"},"description":{"type":"string","title":"页面描述"},"keywords":{"type":"array","title":"关键字","items":{"type":"string","title":"关键字"}},"author":{"type":"string","title":"作者"},"metas":{"type":"array","title":"额外的 meta 标签","items":{"type":"object","title":"meta 标签","properties":{"name":{"type":"string","enum":["name","http-equiv","itemprop"],"default":"name"},"type":{"type":"string"},"content":{"type":"string"}}},"default":[{"name":"name","type":"","content":""}]},"links":{"type":"array","title":"外链样式","items":{"title":"样式表地址","properties":{"href":{"type":"string","title":"href"}}}},"style":{"type":"string","title":"内联样式"},"scripts":{"type":"array","title":"外链脚本","items":{"title":"脚本地址","properties":{"src":{"type":"string"}}}},"script":{"type":"string","title":"内联脚本"}}},"__v":0,"components":[]};

const Coms = []


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
