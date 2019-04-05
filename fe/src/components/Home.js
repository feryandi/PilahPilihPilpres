import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import nookies from 'nookies'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
    };
  }

  componentDidMount() {
      console.log(this.state.userAgent)
      this.getFingerprint()
  }

  getFingerprint() {
    const Fingerprint2 = require('fingerprintjs2');
    const options = {excludes: {userAgent: true}}

    const cookies = nookies.get()
    console.log(cookies['fp'])

    if (!cookies.hasOwnProperty('fp')) {
      Fingerprint2.get(options, (components) => {
          var values = components.map(function (component) { return component.value })
          var murmur = Fingerprint2.x64hash128(values.join(''), 31)
          nookies.set({}, 'fp', murmur, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
      });
    }
  }

  render() {
      return(
        <div class="text-center">
          <div class="row">
            <div class="col">
              <h2>Siapa Presiden Pilihanmu?</h2>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>Cari tahu siapa calon presiden dan wakil presiden yang mewakili aspirasimu melalui pertanyaan-pertanyaan yang kami sediakan</p>
              <br/>
              <br/>
            </div>
          </div>
          <div class="row">
            <div class="col">
            </div>
            <div class="col">
              <Link href='/question'>
                <button type="button" class="btn btn-danger btn-block"><b>MULAI</b></button>
              </Link>
            </div>
            <div class="col">
            </div>
          </div>          
        </div>
      );
  }
}
