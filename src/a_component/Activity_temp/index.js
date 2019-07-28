import React, { Component } from "react";
import "../../util/flexible_css.js";
import "../../util/flexible.min.js";
import '../../assets/styles/scss/main.scss';
import fetchInit from '../../util/fetchinit';
var sa = require("sa-sdk-javascript/sensorsdata.min.js");

import { initAnalytics, pageView } from "../../util/analytins";

import fastClick from "fastclick";
if (!window.sa) {
  window.sa = sa;
}
fetchInit()
initAnalytics();
fastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};
fastClick.attach(document.body);
export default class Activity_temp extends Component {
  constructor(props) {
    super(props);
    pageView();
  }
  componentWillMount() {
  }
}
