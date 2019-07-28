import React from "react";
import ReactDOM from "react-dom/server";
import { Router } from "express";
import path from "path";
import Page from "../models/page";
import Html from "../PublishPage/html";
import fs from "../util/fs";
import PageData from "../../mock/pages.json";
import compile from "../util/compile";
import dataFifter from "../util/dataFifter";
// import zip from "zipfolder";
import request from "request";

const router = new Router();

// const findOnePage = pageId =>
//   new Promise((resolve, reject) => {
//     resolve(PageData.page);
//   });

const findOnePage = pageId =>
  new Promise((resolve, reject) => {
    Page.findOne({ _id: pageId }).then(page => {
      console.log(page, "--------------------");
      resolve(page);
    });
  });

router.post("/", async (req, res, next) => {
  try {
   
    const pageId = req.body.pageId;
    const page = await findOnePage(pageId);
    // const pageName = page.name;
    // const project = page.project;
    const props = {
      props: page.config.props
    };

    const data = await compile.compileTemplate(page);
    props.script = data.fileContent.toString();

    const htmlString = ReactDOM.renderToStaticMarkup(<Html {...props} />);
    const destHtml = data.outputPath + "/index.html";
    // const folderPath = path.join(
    //     __dirname,
    //     "../../publish",
    //     project,
    //     "pages",
    //     pageName
    //   );
    //   var options = {
    //          url: '/wap/zip/upload',
    //          headers:{
    //             'Content-Type': 'multipart/form-data',
    //              device:"asdfasdfaadfasdf"
    //          },//req.headers
    //          form: {
    //              name:"fileName",
    //              filepath:folderPath
    //          }  //req.body
    //      };
     
    //      request.post(options, function(error, response, body) {
    //          console.log('error:'+JSON.stringify(error))
    //          console.info('response:' + JSON.stringify(response));
    //      });

    await fs.writeFile(destHtml, htmlString);
    // const access = await fs.access(folderPath);
//     if (access) {
//      await zip.zipFolder({ folderPath: folderPath })
// }
res.status(200).send(dataFifter.success(page));

  } catch (err) {
    next(err);
  }
});

module.exports = router;
