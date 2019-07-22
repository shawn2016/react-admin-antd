import React, { PureComponent } from "react";
import "../../util/flexible_css.js";
import "../../util/flexible.min.js";
import fetch from "sx-fetch";
import fastClick from "fastclick";
var sa = require("sa-sdk-javascript/sensorsdata.min.js");
if (!window.sa) {
  window.sa = sa;
}
fastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};
fastClick.attach(document.body);
@fetch.inject()
export default class Activity_temp extends PureComponent {
  constructor(props) {
    super(props)
  }
}
