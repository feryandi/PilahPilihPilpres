import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        candidates: {
          1: {
            name: 'Jokowi-Amin',
            number: '01',
            image: '01.png'
          },
          2: {
            name: 'Prabowo-Sandi',
            number: '02',
            image: '02.png'
          }
        }
    };
  }

  getPercentage(score) {
    return 100 * score / Object.keys(this.state.questions).length;
  }

  getWinningResult() {
    return this.state.result.map[this.state.result.order[0]];
  }

  getOneWinningCandidate() {
    return this.state.candidates[this.getWinningResult()[0]];
  }

  componentDidMount() {}

  failure() {
      return('Invalid input')
  }

  success() {
    return (
      <div>
        <div className="row text-center">
          <div className="col-12 offset-md-3 col-md-6 result-image">
            {
              (this.getWinningResult().length === 1 && this.getOneWinningCandidate() != null) ?
              (
                <img
                  src={ '/static/images/' + this.getOneWinningCandidate().image }
                  width="100%"/>
              ) : (
                <img
                  src={ '/static/images/00.png' }
                  width="100%"/>
              )
            }
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12 offset-md-3 col-md-6 result-badge">
          {
            this.getWinningResult().length === 1 && this.getOneWinningCandidate() != null ?
            (
              <span>
                Aspirasi Anda dipenuhi pasangan<br/>
                <b>{ this.getOneWinningCandidate().name }</b>
              </span>
            ) : (
              <span>
                Aspirasi Anda tidak condong ke calon manapun
              </span>
            )
          }
          </div>
        </div>

        {
          this.state.result.order.map((score, index) => {
            if (parseInt(score) <= 0) {
              return;
            }
            return (
              this.state.result.map[parseInt(score)].map((result, index) => {
                return (
                  <div key={score + '-result-' + index} className="row">
                    <div className="col-12 offset-md-3 col-md-6 result-other">

                      <div className="row">
                        <div className="col-2 result-no-right-padding">                      
                          <span className="badge badge-pill badge-secondary result-label">
                            { this.getPercentage(score) }%
                          </span>
                        </div>

                        <div className="col-10">
                          aspirasi Anda&nbsp;
                          { this.state.candidates[result] == null ?
                            `tidak dipenuhi oleh calon manapun` :
                            `dipenuhi oleh pasangan ` + this.state.candidates[result].name }
                        </div>
                      </div>
                      
                    </div>
                  </div>
                );
              })
            )
          })
        }

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
