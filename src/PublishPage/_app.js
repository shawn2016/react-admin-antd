const page = {"_id":"5d2d44149c6a213441b19ae3","name":"test","description":"111111111","project":"1","config":{"properties":{"script":{"title":"内联脚本","type":"string"},"scripts":{"items":{"properties":{"src":{"type":"string"}},"title":"脚本地址"},"title":"外链脚本","type":"array"},"style":{"title":"内联样式","type":"string"},"links":{"items":{"properties":{"href":{"title":"href","type":"string"}},"title":"样式表地址"},"title":"外链样式","type":"array"},"metas":{"default":[{"content":"","type":"","name":"name"}],"items":{"properties":{"content":{"type":"string"},"type":{"type":"string"},"name":{"default":"name","enum":["name","http-equiv","itemprop"],"type":"string"}},"title":"meta 标签","type":"object"},"title":"额外的 meta 标签","type":"array"},"author":{"title":"作者","type":"string"},"keywords":{"items":{"title":"关键字","type":"string"},"title":"关键字","type":"array"},"description":{"title":"页面描述","type":"string"},"title":{"title":"页面标题","type":"string"}}},"__v":0,"owner":null,"components":[{"key":0,"_id":"5d2d43509c6a213441b19ae2","name":"Collection","config":{"properties":{"collections":{"items":{"properties":{"bids":{"items":{"properties":{"pic_url":{"default":"http://p.qlogo.cn/gbar_heads/Q3auHgzwzM7tURZN9nM1jR8GUTmj1gicic7rqrKJoJnjqjGysKPnVHiaQ/","description":"头像地址","type":"string"},"bid":{"default":206624,"description":"部落 id","type":"number"},"name":{"default":"萌娘百科","description":"名字","type":"string"}},"title":"部落","type":"object"},"format":"table","title":"部落列表","type":"array"},"title":{"default":"收藏集","description":"名字","type":"string"}},"title":"收藏集","type":"object"},"title":"收藏集列表","type":"array"}},"props":{"collections":[{"bids":[{"pic_url":"http://p.qlogo.cn/gbar_heads/Q3auHgzwzM7tURZN9nM1jR8GUTmj1gicic7rqrKJoJnjqjGysKPnVHiaQ/","bid":206624,"name":"萌娘百科"},{"pic_url":"http://p.qlogo.cn/gbar_heads/Q3auHgzwzM6DpULhv75miaCJGoWbiadsuWu3Bic6SjrUkNuSLMticDib4Pg/","bid":211754,"name":"诱宵美九"},{"pic_url":"http://p.qlogo.cn/gbar_heads/Q3auHgzwzM4mlxIicO46qqRa7icb3I4XYnWvPSypYH73p3mMmMXJaBSg/","bid":11464,"name":"爱漫画"},{"pic_url":"http://p.qpic.cn/qqconadmin/0/9a6bc9325c864c72a4c7bc4c8dd75838/0","bid":10196,"name":"柯南"},{"pic_url":"http://p.qpic.cn/qqconadmin/0/a6ee75a998d6488fae657dc5c6ad6f4c/0","bid":16569,"name":"ACG绘画"},{"pic_url":"http://p.qlogo.cn/gbar_heads/Q3auHgzwzM7b4MAe2CG1opb4PeYOS6GysLF38NZD1vXlw9BZn4NolA/","bid":272114,"name":"二次元马戏团"}],"title":"二次元空间"}]},"main":"./Main.js","private":true,"version":"0.0.0","description":"横向轮播"},"project":"buluo"}]};

const Coms = [require("../resources/buluo/components/Collection/Main.js")]


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
