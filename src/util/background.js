import React, { Component } from "react";

export const setBackGround = background => WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      this.originBodyColor = document.body.style.background;
      document.body.style.background = background;
    }
componentWillUnmount() {
      document.body.style.background = this.originBodyColor;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
