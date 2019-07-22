import { Router } from "express";
import resources from "../util/resources";
import compile from "../util/compile";
import dataFifter from "../util/dataFifter";

const router = new Router();

router.get("/:project/:component", async (req, res, next) => {
  try {
    let component = await resources.getComponent(
      req.params.project,
      req.params.component
    );
    component.fileContent = (await compile.compileComponent(
      req.params.project,
      req.params.component
    )).fileContent.toString();
    res.status(200).send(dataFifter.success(component));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
