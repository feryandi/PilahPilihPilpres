import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
        ...this.props
    };
  }

  componentDidMount() {}

  failure() {
      return('Invalid input')
  }

  success() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-12 offset-md-3 col-md-6">
            <img
              src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
              width="100%"/>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12 offset-md-3 col-md-6 result-badge">
            <h2><b>70%</b></h2>
            Aspirasi Anda dipenuhi pasangan nomor 10
          </div>
        </div>

        <div className="row">
          <div className="col-12 offset-md-3 col-md-6 result-other">
            <span class="badge badge-pill badge-secondary">20%</span> aspirasi dipenuhi pasangan nomor 05
          </div>
        </div>

        <div className="row">
          <div className="col-12 offset-md-3 col-md-6 result-other">
            <span class="badge badge-pill badge-secondary">20%</span> aspirasi tidak dipenuhi oleh manapun
          </div>
        </div>

        <br/>

        <div className="row">
          <div className="col-2 col-md">
          </div>
          <div className="col">
            <Link href='/answer'>
              <button type="button" className="btn btn-danger btn-block"><b>PENJELASAN</b></button>
            </Link>
          </div>
          <div className="col-2 col-md">
          </div>
        </div>          
      </div>
    )
  }

  render() {
      return(this.success())
  }
}
