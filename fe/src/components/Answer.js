import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

export default class extends Component {
  static propTypes = {
    q: PropTypes.number
  }

  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        current_question: 0,
        candidates: {
          1: {
            name: 'Jokowi-Amin',
          },
          2: {
            name: 'Prabowo-Sandi',
          }
        }
    };
  }

  componentDidMount() {}

  currentQuestion() {
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
        current_question: current_question - 1,
        showing_answer: 0
      });
      window.scrollTo(0, 0);
    }
  }
  
  hasNextQuestion() {
    const current_question = this.state.current_question;
    const questions = this.state.questions;
    return current_question + 1 < Object.keys(questions).length - 1
  }

  nextQuestion() {
    const current_question = this.state.current_question;

    if (!this.state.questions.hasOwnProperty(current_question + 1)) {

    } else {
      this.setState({
        current_question: current_question + 1,
        showing_answer: 0
      });
      window.scrollTo(0, 0);
    }
  }

  currentAnswer() {
    return this.state.answers[this.state.current_question];
  }

  isSelectedAnswer(id) {
    const answer = this.currentAnswer();
    if (typeof answer !== 'undefined' && answer.answer === id) {
      return true;
    }
    return false;
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
              <span className="badge badge-secondary">{ this.state.current_question + 1 }</span>
            </h2>
          </div>
          <div className="col">
            <h2>
              <ReactMarkdown
                source={ this.currentQuestion().question }/>
            </h2>
            {/* <p>{ this.currentQuestion().helper }</p> */}
            <br/>
          </div>
        </div>
    
        { this.currentQuestion().choice.map((choice, index) => {
          return(
            <React.Fragment>
              <div
                key={ choice.id }
                className="card">
                <div 
                  className={"card-body text-center " + (this.isSelectedAnswer(choice.id) ? "answer-selected":"answer-unselected")}>

                  <div class="row">
                    <div class="col-12 col-md-8" style={{ display: 'flex', alignItems: 'center' }}>
                      { choice.text }
                    </div>
                    <div class="col-12 col-md-4">
                      <div class="alert alert-calm" role="alert" style={{ marginBottom: 0 }}>
                        <small><b>{ choice.result.map((result, index) => {
                          let separator = '.';
                          if (index < choice.result.length - 1) {
                            separator = ', ';
                          }
                          const candidate = this.state.candidates[result];
                          if (candidate == null) {
                            return ('Tidak diakomodasi kedua Paslon' + separator)
                          }
                          return (candidate.name + separator)
                        }) }</b>
                        </small>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <br/>
            </React.Fragment>
          )
        }) }

        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#dc3545' }}></div>
          <div className="card-body text-justify card-explanation">

            <ReactMarkdown
              source={ this.currentQuestion().reason }
              linkTarget={'_blank'}/>

            <div style={{ textAlign: 'left' }}>
              <small><i>Sumber dan referensi:</i>
              <ul>
                {
                  this.currentQuestion().sources && this.currentQuestion().sources.map((source, index) => {
                    return(
                      <li key={"source-" + index}>
                        <ReactMarkdown source={ source } linkTarget={'_blank'}/>
                      </li>
                    );
                  })
                }
              </ul>
              </small>
            </div>

          </div>
        </div>
        <br/>

        <div className="row">
          <div className="col-3 col-md text-left">
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
          </div>
          <div className="col-3 col-md text-right">
            { this.hasNextQuestion() &&
              <button
                type="button"
                className="btn btn-danger"
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
