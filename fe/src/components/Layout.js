import React, { Component } from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import Router from 'next/router';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Layout extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
  }

  componentDidMount () {
  }

  render () {
    return (
      <React.Fragment>
          {this.props.children}
      </React.Fragment>
    );
  }
}
