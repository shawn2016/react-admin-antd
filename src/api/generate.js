const React = require("react");
const ReactDOM = require("react-dom/server");
const { Router } = require("express");
// const Page = require("../models/page");
const Html = require("../util/html");
const fs = require("../util/fs");
const { compileTemplate } = require("../utils/compile");
const router = new Router();

const findOnePage = pageId =>
  new Promise((resolve, reject) => {
    Page.findOne({ _id: pageId }).then(page => {
      resolve(page);
    });
  });

router.post("/", async (req, res, next) => {
  try {
    const pageId = req.body.pageId;
    const page = await findOnePage(pageId);
    const props = {
      props: page.config.props
    };

    // for (let i in page.components) {
    //   let component = page.components[i];
    //   if (component.project && component.name) {
    //     let filePath = path.join(__dirname, '../publish', component.project, 'components', component.name, 'Main.js');
    //     component.fileContent = await fs.readFile(filePath);
    //   }
    // }

    // todo felix
    // props.body = ReactDOM.renderToStaticMarkup(<Body page={page} serverRendering={true} />);

    const data = await compileTemplate(page);
    props.script = data.fileContent.toString();

    const htmlString = ReactDOM.renderToStaticMarkup(<Html {...props} />);
    const destHtml = data.outputPath + "/index.html";
    await fs.writeFile(destHtml, htmlString);
    res.status(200).send({
      retcode: 0
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
