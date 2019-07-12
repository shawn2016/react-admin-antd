/** 用于开发环境的服务启动 **/
const path = require("path"); // 获取绝对路径有用
const express = require("express"); // express服务器端框架
import fs from "./src/util/fs";
const env = process.env.NODE_ENV; // 模式（dev开发环境，production生产环境）
const mock = require("./mock/app-data"); // mock模拟数据，模拟后台业务
const bodyParser = require("body-parser"); // express中间件，用于处理post请求的body参数
const app = (global.server = express()); // 实例化express服务
const PORT = process.env.PORT || 8888; // 服务启动端口号
import mongoose from "mongoose";
app.set("port", PORT);
//重点在这一句，赋值一个全局Promise
mongoose.Promise = global.Promise;
// todo: move to config/database.js
const dbHost = process.env["MONGODB_PORT_27017_TCP_ADDR"] || "localhost";
const dbPort = process.env["MONGODB_PORT_27017_TCP_PORT"] || 27017;
const dbName = process.env["MONGODB_INSTANCE_NAME"] || "pager";
const dbUsername = process.env["MONGODB_USERNAME"] || "pager";
const dbPassword = process.env["MONGODB_PASSWORD"] || "pass4pager";
const dbUri = "mongodb://" + dbHost + ":" + dbPort + "/" + dbName;
const dbOptions = {
  user: dbUsername,
  pass: dbPassword
};
const dbConnection = mongoose.connection.openUri(dbUri, dbOptions);
dbConnection.on("error", error => {
  throw error;
});
dbConnection.once("open", () => {
  console.log("database connected: ", dbUri);
});

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "./src/public")));
app.use(express.static(path.join(__dirname, "./publish")));
app.use(bodyParser.json({ limit: "10000 kB" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/projects", require("./src/api/projects"));
app.use("/api/generate", require("./src/api/generate"));
app.use("/api/components", require("./src/api/components"));
app.use("/api/sync", require("./src/api/sync"));
app.use("/api/pages", require("./src/api/pages"));
app.use("/api/preview", require("./src/api/pages"));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get("*", async (req, res, next) => {
  try {
    const html = await fs.readFile(path.join(__dirname, "./src/index.html"));
    res
      .status(200)
      .type("html")
      .send(html);
  } catch (err) {
    next(err);
  }
});

/** 监听POST请求，返回MOCK模拟数据 **/
app.post("*", (req, res, next) => {
  const result = mock.mockApi(req.originalUrl, req.body);
  res.send(result);
});

/** 启动服务，监听PORT端口 **/
app.listen(PORT, () => {
  console.log("服务已启动: http://localhost:%s", PORT);
});
