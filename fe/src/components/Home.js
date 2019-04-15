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
        loading: true,
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

    this.setState({ loading: false })
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
        <div>
          <div className="row">
            <div className="col">
              <h2 className="home-title"><img src="/static/images/logo.png" style={{ width: '70%' }}/></h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
              Kuis ini ditujukan untuk membantu Anda memahami kecocokan preferensi pribadi dengan program maupun gagasan kedua pasangan calon Pemilu 2019.
              <br/>
              <small>
              Instruksi:
              <ol style={{ paddingInlineStart: '15px' }}>
              <li>Jawablah pertanyaan dengan satu opsi yang paling sesuai dengan aspirasimu.</li>
              <li>Jika merasa tidak yakin dengan jawaban yang tersedia, silakan klik Lewati (tapi jangan terlalu banyak melewati pertanyaan, ya!)</li>
              <li>Jangan lupa untuk membaca penjelasan tiap pertanyaan di akhir kuis untuk menambah pemahamanmu akan program kedua Paslon ;)</li>
              </ol>
              </small></p>
              <p className="grecaptcha-text">
              Situs ini dibuat secara netral dan objektif serta tidak terafiliasi pihak manapun. Baca <Link href='/disclaimer'>disclaimer</Link> kami untuk mengetahui lebih lanjut tentang kuis ini.
              </p>
              <br/>
              <br/>
            </div>
          </div>
          <div className="row text-center">
            <div className="col offset-md-3 col-md-6">
              <Link href='/question'>
                <a style={{ textDecoration: 'none'}}>
                  <button
                    type="button"
                    className="btn btn-lg btn-danger btn-block"
                    disabled={this.state.loading}
                    onClick={() => { this.setState({ loading: true }) }}>
                      <b>
                        { this.state.loading ? `MEMPERSIAPKAN...` : `MULAI` }
                      </b>
                  </button>
                </a>
              </Link>
              <br/>
              <p className="grecaptcha-text">
                Dengan mengisi kuis, Anda setuju dengan <Link href='/privacy'>Kebijakan Privasi</Link> kami.
              </p>
            </div>
          </div>
        </div>
      );
  }
}
