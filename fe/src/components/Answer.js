import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class extends Component {
  static propTypes = {
    q: PropTypes.number
  }

  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        current_question: 0
    };
  }

  componentDidMount() {}

  currentQuestion() {
    console.log(this.state.current_question)
    console.log(this.state.questions)
    console.log(this.state.questions[this.state.current_question])
    return this.state.questions[this.state.current_question];
  }

  hasPrevQuestion() {
    const current_question = this.state.current_question;
    return current_question - 1 >= 0
  }

  prevQuestion() {
    const current_question = this.state.current_question;

    if (!this.state.questions.hasOwnProperty(current_question - 1)) {

    } else {
      this.setState({
        current_question: current_question - 1
      });
      window.scrollTo(0, 0);
    }
  }
  
  hasNextQuestion() {
    const current_question = this.state.current_question;
    const questions = this.state.questions;
    return current_question + 1 < Object.keys(questions).length
  }

  nextQuestion() {
    const current_question = this.state.current_question;

    if (!this.state.questions.hasOwnProperty(current_question + 1)) {

    } else {
      this.setState({
        current_question: current_question + 1
      });
      window.scrollTo(0, 0);
    }
  }

  failure() {
      return('Invalid input')
  }

  success() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-1">
            <h2>
              <span className="badge badge-secondary">{ this.state.current_question }</span>
            </h2>
          </div>
          <div className="col">
            <h2>
              { this.currentQuestion().question }
            </h2>
            {/* <p>{ this.currentQuestion().helper }</p> */}
            <br/>
          </div>
        </div>
      
        { this.currentQuestion().choice.map((choice, index) => {
          return(
            <React.Fragment>
              <div key={ choice.id } className="card">
                <div className="card-body">
                  <h5>{ choice.text }</h5>
                  <div>{ choice.reason }</div>
                  <br/>
                  <div><i>Sumber</i></div>
                  <ul>
                    {
                      choice.sources.map((source) => {
                        return(<li>{ source }</li>);
                      })
                    }
                  </ul>
                </div>
              </div>
              <br/>
            </React.Fragment>
          )
        }) }

        <div className="row">
          <div className="col-2 col-md text-left">
            { this.hasPrevQuestion() &&
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.prevQuestion()}>
                <i className="fas fa-arrow-circle-left"/>
              </button>
            }
          </div>
          <div className="col col-md">
            <Link href='/result'>
              <button
                type="button"
                className="btn btn-danger btn-block">
                <b>KEMBALI KE HASIL</b>
              </button>
            </Link>
          </div>
          <div className="col-2 col-md text-right">
            { this.hasNextQuestion() &&
              <button
                type="button"
                className="btn btn-danger btn-block"
                onClick={() => this.nextQuestion()}>
                <i className="fas fa-arrow-circle-right"/>
              </button>
            }
          </div>
        </div>
      </div>
    )
  }

  render() {
      return(this.success())
  }
}
