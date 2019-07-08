import path from "path";
import webpack from "webpack";
import fs from "fs";
import ncp from "ncp";

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

const rules = [
    {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    {test: /\.json$/, loader: 'json-loader',},
    {test: /\.txt$/, loader: 'raw-loader',},
    {test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/, loader: 'url-loader?limit=1024',},
    {test: /\.(eot|ttf|wav|mp3)$/, loader: 'file-loader',},
    {test: /\.scss$/, loader: 'style-loader/useable!css-loader!sass-loader!postcss-loader',},
    {test: /\.css$/, loader: 'style-loader/useable!css-loader!postcss-loader',},
//   {
//     // 编译前通过eslint检查代码 (注释掉即可取消eslint检测)
//     test: /\.js?$/,
//     enforce: "pre",
//     loader: "eslint-loader",
//     include: path.resolve(__dirname, "src")
//   },
//   //   {
//   //     // .js .jsx用babel解析
//   //     test: /\.js?$/,
//   //     loader: "happypack/loader?id=happybabel",
//   //     include: path.resolve(__dirname, "src")
//   //   },
//   {
//     test: /\.(js|jsx)$/,
//     loader: "babel-loader",
//     include: path.join(__dirname, "src"),
//     query: {
//       plugins: [
//         [
//           "react-transform",
//           {
//             transforms: [
//               {
//                 transform: "react-transform-hmr",
//                 imports: ["react"],
//                 locals: ["module"]
//               }
//             ]
//           }
//         ]
//       ]
//     }
//   },
//   {
//     test: /\.json$/,
//     loader: "json-loader"
//   },
//   {
//     // .css 解析
//     test: /\.css$/,
//     loaders: [
//       "style-loader",
//       {
//         loader: "css-loader",
//         options: {
//           modules: true,
//           localIdentName: "[local]_[hash:base64:5]"
//         }
//       },
//       "postcss-loader"
//     ]
//   },
//   {
//     // .less 解析
//     test: /\.less$/,
//     loaders: [
//       "style-loader",
//       {
//         loader: "css-loader",
//         options: {
//           modules: true,
//           localIdentName: "[local]_[hash:base64:5]"
//         }
//       },
//       "postcss-loader",
//       "less-loader"
//     ],
//     include: path.resolve(__dirname, "src")
//   },
//   {
//     // .less 解析 (用于解析antd的LESS文件)
//     test: /\.less$/,
//     loaders: ["style-loader", "css-loader", "postcss-loader", `less-loader`],
//     include: path.resolve(__dirname, "node_modules")
//   },
//   {
//     // .scss 解析
//     test: /\.scss$/,
//     loaders: [
//       "style-loader",
//       {
//         loader: "css-loader",
//         options: {
//           modules: true,
//           localIdentName: "[local]_[hash:base64:5]"
//         }
//       },
//       "postcss-loader",
//       "sass-loader"
//     ]
//   },
//   {
//     // 文件解析
//     test: /\.(eot|woff|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
//     include: path.resolve(__dirname, "src"),
//     loader: "file-loader?name=assets/[name].[ext]"
//   },
//   {
//     // 图片解析
//     test: /\.(png|jpg|gif)$/,
//     include: path.resolve(__dirname, "src"),
//     loader: "url-loader?limit=8192&name=assets/[name].[ext]"
//   }
];

const plugins = [
  // Uglify 加密压缩源代码
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: true // 删除代码中所有注释
    },
    compress: {
      warnings: false, // 删除没有用的代码时是否发出警告
      drop_console: true // 是否删除所有的console
    }
  })
];

async function compileComponent(project, name, optimize) {
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
  const outputPath = path.join(__dirname, "../publish/", projectPrefix, name);
  var config = {
    entry: entryPath,
    output: {
      path: outputPath,
      filename: outputFileName
    },
    module: {
      rules
    },
    plugins: optimize ? plugins : []
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
        ncp(outputPath, path.join(__dirname, "./public"), function(err) {
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
    "proTest",
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
      rules
    },
    plugins: plugins
  };

  let Coms = [];
  page.components.forEach(component => {
    const componentPath =
      "../resources/" +
      "buluo" +
      "/components/" +
      component.name +
      "/Main.js";
    Coms.push('require("' + componentPath + '")');
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
