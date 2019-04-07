import React, { Component } from 'react'
import Router from 'next/router'
import Result from '../components/Result'
import Answer from '../components/Answer'
import nookies from 'nookies'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        is_result: true,
        is_answer: false,
    };
  }

  componentDidMount() {}

  deleteSession() {
    const cookies = nookies.get();
    nookies.destroy({}, 'se');
    nookies.destroy({}, 'to');
    Router.push('/');
  }

  success() {
    return (
      <React.Fragment>
        { this.state.is_result && (
          <React.Fragment>
            <Result {...this.state}/>
            <br/>
            <div className="row">
              <div className="col-2 col-md">
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={() => { this.setState({ is_answer: true, is_result: false }) }}>
                  <b>PENJELASAN</b>
                </button>
              </div>
              <div className="col-2 col-md">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => { this.deleteSession() }}>
                  <b><i className="fas fa-redo-alt"></i></b>
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
  
        { this.state.is_answer && (
          <React.Fragment>
            <Answer {...this.state}/>
            <br/>
            <div className="row">
              <div className="col col-md">
              </div>
              <div className="col-12 col-md">
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={() => { this.setState({ is_answer: false, is_result: true }) }}>
                  <b>KEMBALI KE HASIL</b>
                </button>
              </div>
              <div className="col col-md">
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }

  render() {
      return(this.success())
  }
}
