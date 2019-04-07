import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import Reaptcha from 'reaptcha'
import nookies from 'nookies'

const _reCaptchaRef = React.createRef();

export default class extends Component {
  static propTypes = {
    q: PropTypes.number
  }

  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        token: '',
        loaded: false,
        rendered: false,
        verified: false,
        submitted: false,
        executing: false
    };
    this.captcha = null;
  }

  currentQuestion() {
    return this.state.questions[this.state.last_unanswered];
  }

  hasPrevQuestion() {
    const last_unanswered = this.state.last_unanswered;
    return last_unanswered - 1 >= 0
  }

  prevQuestion() {
    const last_unanswered = this.state.last_unanswered;

    if (!this.state.questions.hasOwnProperty(last_unanswered - 1)) {

    } else {
      this.setState({
        last_unanswered: last_unanswered - 1
      });
      window.scrollTo(0, 0);
    }
  }
  
  hasNextQuestion() {
    const last_unanswered = this.state.last_unanswered;
    const questions = this.state.questions;
    return last_unanswered + 1 < Object.keys(questions).length
  }

  async nextQuestion() {
    const last_unanswered = this.state.last_unanswered;

    if (!this.hasAnswer()) {
      this.skipAnswer()
    }

    if (!this.hasNextQuestion()) {
      this.captcha.execute();
    } else {
      this.setState({
        last_unanswered: last_unanswered + 1
      });
      window.scrollTo(0, 0);
    }
  }

  currentAnswer() {
    return this.state.answers[this.state.last_unanswered];
  }

  hasAnswer() {
    return typeof this.currentAnswer() !== 'undefined';
  }

  isSelectedAnswer(id) {
    const answer = this.currentAnswer();
    if (typeof answer !== 'undefined' && answer.answer === id) {
      return true;
    }
    return false;
  }

  selectAnswer(e) {
    const answer = {
      qid: this.currentQuestion().id,
      answer: parseInt(e.currentTarget.id)
    };

    let answers = this.state.answers;
    answers[this.state.last_unanswered] = answer;
    this.setState(answers);
  }

  skipAnswer() {
    const answer = {
      qid: this.currentQuestion().id,
      answer: -1
    };

    let answers = this.state.answers;
    answers[this.state.last_unanswered] = answer;
    this.setState(answers);
  }

  async sendAnswers(token) {
    const cookies = nookies.get();

    let payload = {
      fp: cookies['fp'],
      se: cookies['se'],
      to: cookies['to'],
      reCaptcha: token,
      answers: this.state.answers
    }

    // TODO: Only absolute URL
    await fetch(`http://localhost:3000/api/answer/send`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }

  checkUnselectionAnswer(e) {
    const checked = e.currentTarget.checked;

    if (checked) {
      let answers = this.state.answers;
      delete answers[this.state.last_unanswered];
      this.setState(answers);
    }
  }

  componentDidMount() {}

  onVerify = () => async (token) => {
    this.setState({ token, verified: true });
    await this.sendAnswers(token)
    Router.push('/result');
  }

  onExpire = () => () => {
    this.setState({ verified: false });
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
              <span className="badge badge-secondary">{ this.state.last_unanswered + 1 }</span>
            </h2>
          </div>
          <div className="col">
            <h2>
              { this.currentQuestion().question }
            </h2>
            <p>{ this.currentQuestion().helper }</p>
          </div>
        </div>

        <div className="row text-left d-block">
          { this.currentQuestion().choice.map((choice, index) => {
            return(
              <div key={ choice.id } className="col">
                <div className="custom-control custom-radio box-radio">
                  <input
                    type="radio"
                    id={ choice.id }
                    name="answer"
                    className="custom-control-input box-control-input"
                    onClick={ (e) => this.checkUnselectionAnswer(e) }
                    onChange={ (e) => this.selectAnswer(e) }
                    checked={ this.isSelectedAnswer(choice.id) }/>
                  <label
                    className="custom-control-label box-control-label"
                    htmlFor={ choice.id }>
                    { choice.text }
                  </label>
                </div>
                <br/>
              </div>
            )
          }) }
        </div>
        <br/>
        <div className="row">
          <div className="col text-left">
            { this.hasPrevQuestion() &&
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.prevQuestion()}>
                <i className="fas fa-arrow-circle-left"/>
              </button>
            }
          </div>
          <div className="col">
          </div>
          <div className="col text-right">
            <Reaptcha
              ref={e => (this.captcha = e)}
              sitekey="6LeGapwUAAAAACloH7gj-E5PWlIcXO-k_JBMmiNZ"
              onVerify={this.onVerify()}
              onExpire={this.onExpire()}
              size="invisible"
            />
            <button 
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.nextQuestion();
              }}>
              { !this.hasAnswer() && <b>LEWATI&nbsp;&nbsp;&nbsp;</b> }
              
              { this.hasNextQuestion() ? (
                <i className="fas fa-arrow-circle-right"/>
              ) : (
                <i className="fas fa-check-circle"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
      return(this.success())
  }
}
