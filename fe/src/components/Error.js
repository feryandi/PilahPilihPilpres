import React, { Component } from 'react'
import Link from 'next/link'

export default class extends Component {

  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
    };
    console.error("[Error detected] " + JSON.stringify(this.props))
  }

  success() {
    return (
      <React.Fragment>
        <center>
          <h3>Terjadi Kesalahan</h3>
          Maaf, sistem kami mengalami gangguan. Tunggu beberapa saat atau laporkan.
          <br/>
          <br/>
          Anda dapat menekan tombol di bawah ini dan mencoba lagi.
        </center>
        <br/>
        <Link href='/'>
          <button
              type="button"
              className="btn btn-danger btn-block">
              <b>KEMBALI</b>
          </button>
        </Link>
        <br/>
        {
          this.state.error && (
            <div>
              <small>
              <b>{'Pesan Kesalahan'}</b>
              <br/>
              Untuk membantu kami, berikan pesan kesalahan ini kepada <a href="mailto:kontak@pilahpilihpilpres.com">kontak@pilahpilihpilpres.com</a> atau <a href="https://twitter.com/feryandi">@feryandi</a>.
              <br/>
              Berikan dalam bentuk teks, bukan gambar. Terima kasih!
              </small>
              <br/>
              <br/>
              <div class="alert alert-calm alert-code">
                { new Buffer(this.state.error).toString('base64') }
              </div>
            </div>
          )
        }
      </React.Fragment>
    )
  }

  render() {
      return(this.success())
  }
}
