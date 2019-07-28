import path from "path";
import webpack from "webpack";
import fs from "fs";
import ncp from "ncp";
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 为了单独打包css

const AUTOPREFIXER_BROWSERS = [
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 35",
  "Firefox >= 31",
  "Explorer >= 9",
  "iOS >= 7",
  "Opera >= 12",
  "Safari >= 7.1"
];

const loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      plugins: [
        [
          "transform-runtime",
          { helpers: false, polyfill: true, regenerator: true }
        ],
        [
          "import",
          [
            { style: true, libraryName: "antd" },
            {
              style: true,
              libraryName: "antd-mobile",
              libraryDirectory: "lib"
            }
          ]
        ],
        "transform-decorators-legacy",
        "transform-class-properties"
      ]
    }
  },
  { test: /\.json$/, loader: "json-loader" },
  //   { test: /\.txt$/, loader: "raw-loader" },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: "url-loader",
    query: {
      limit: 1,
      name: "img/[name]-[hash:8].[ext]"
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 8000,
      name: "media/[name].[hash:7].[ext]"
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 0,
      name: "fonts/[name].[hash:7].[ext]"
    }
  },
  {
    // .less 解析 (用于解析antd的LESS文件)
    test: /\.less$/,
    loaders: ["style-loader", "css-loader", "postcss-loader", `less-loader`],
  },
  {
    // .scss 解析
    test: /\.scss$/,
    loaders: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[local]_[hash:base64:5]"
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  },
  {
    // .css 解析
    test: /\.css$/,
    loaders: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[local]_[hash:base64:5]"
        }
      },
      "postcss-loader"
    ]
  }
];

const plugins = [
  // 配置了这个插件，再配合上面loader中的配置，将所有样式文件打包为一个单独的css文件
  new ExtractTextPlugin({
    filename: "[name].[hash:6].css", // 生成的文件名
    allChunks: true // 从所有chunk中提取
  })
];
async function compileComponent(project, name, optimize) {
  debugger;
  console.log("start to compile component: ", project, name);
  const projectPrefix = project + "/components";
  const outputFileName = "Main.js";
  const entryPath = path.join(
    __dirname,
    "../resources",
    projectPrefix,
    name,
    outputFileName
  );
  const outputPath = path.join(
    __dirname,
    "../../publish/",
    projectPrefix,
    name
  );
  var config = {
    entry: entryPath,
    output: {
      path: outputPath,
      filename: outputFileName
    },
    module: {
      loaders: loaders
    },
    plugins: plugins
  };

  var compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        const fileContent = fs.readFileSync(
          path.join(outputPath, outputFileName)
        );
        // todo 这么写太丑了
        ncp(outputPath, path.join(__dirname, "../public"), function(err) {
          if (err) {
            reject(err);
          }
          resolve({
            stats: stats,
            fileContent: fileContent,
            outputPath: outputPath,
            outputFileName: outputFileName
          });
          console.log("end compile component: ", project, name);
        });
      }
    });
  });
}

const compileTemplate = async page => {
  const project = page.project;
  const pageId = page._id;
  const pageName = page.name;
  console.log("start to compile template: ", project, pageId);
  const inputPath = path.join(__dirname, "../PublishPage/");
  const inputFileName = "_app.js";
  const outputPath = path.join(
    __dirname,
    "../../publish/",
    project,
    "pages/" + pageName
  );
  const outputFileName = "app.bundle.js";
  var config = {
    entry: inputPath + inputFileName,
    output: {
      path: outputPath,
      filename: outputFileName
    },
    module: {
      loaders: loaders
    },
    plugins: plugins
  };

  let Coms = [];
  page.components.forEach(component => {
    const componentPath =
      "../resources/" +
      component.project +
      "/components/" +
      component.name +
      "/Main.js";
    Coms.push('require("' + componentPath + '")');
    // Coms.push('require("' + componentPath + '")');
    // delete pre compiled content
    delete component.fileContent;
  });

  const pageToString = JSON.stringify(page);
  const varScripts =
    "const page = " +
    pageToString +
    ";\n\n" +
    "const Coms = [" +
    Coms +
    "]\n\n\n";
  const appScript = fs
    .readFileSync(path.join(inputPath, "_app_template.js"))
    .toString();
  const allScript = varScripts + appScript;
  fs.writeFileSync(path.join(inputPath, inputFileName), allScript);
  var compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        const outputFilePath = path.join(outputPath, outputFileName);
        const jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0) {
          console.log(jsonStats.errors);
          reject(jsonStats.errors);
        }
        const fileContent = fs.readFileSync(outputFilePath);
        resolve({
          stats: stats,
          fileContent: fileContent,
          outputPath: outputPath,
          outputFileName: outputFileName
        });
        console.log("end compile template: ", project, pageId);
      }
    });
  });
};

export default { compileComponent, compileTemplate };
