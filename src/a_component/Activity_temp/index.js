import React, { PureComponent } from "react";
import "../../util/flexible_css.js";
import "../../util/flexible.min.js";
var sa = require("sa-sdk-javascript/sensorsdata.min.js");

import { initAnalytics, pageView } from "../../util/analytins";

import fastClick from "fastclick";
if (!window.sa) {
  window.sa = sa;
}
initAnalytics();
fastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};
fastClick.attach(document.body);
export default class Activity_temp extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    pageView();
  }
}
