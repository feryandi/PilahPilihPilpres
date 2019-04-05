import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import nookies from 'nookies'
import fetch from 'isomorphic-fetch';

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
    };
  }

  componentDidMount() {
    this.getUserIdentity()
  }

  async getSession(fingerprint) {
    const cookies = nookies.get()

    let payload = {
      fp: fingerprint
    }
    
    if (!cookies.hasOwnProperty('se')) {
      let result = await fetch(`/api/session/generate`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(res => res.json());

      if (result['status'] === 'ok') {
        nookies.set({}, 'se', result['session'], {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        nookies.set({}, 'to', result['token'], {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
      }
    }
  }

  getUserIdentity() {
    const Fingerprint2 = require('fingerprintjs2');
    const options = {excludes: {userAgent: true}}

    const cookies = nookies.get()

    if (!cookies.hasOwnProperty('fp')) {
      Fingerprint2.get(options, (components) => {
          var values = components.map(function (component) { return component.value });
          var murmur = Fingerprint2.x64hash128(values.join(''), 31);
          nookies.set({}, 'fp', murmur, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          });
          this.getSession(murmur);
      });
    } else {
      this.getSession(cookies['fp']);
    }
  }

  render() {
      return(
        <div className="text-center">
          <div className="row">
            <div className="col">
              <h2>Siapa Presiden Pilihanmu?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>Cari tahu siapa calon presiden dan wakil presiden yang mewakili aspirasimu melalui pertanyaan-pertanyaan yang kami sediakan</p>
              <br/>
              <br/>
            </div>
          </div>
          <div className="row">
            <div className="col">
            </div>
            <div className="col">
              <Link href='/question'>
                <button type="button" className="btn btn-danger btn-block"><b>MULAI</b></button>
              </Link>
            </div>
            <div className="col">
            </div>
          </div>          
        </div>
      );
  }
}
