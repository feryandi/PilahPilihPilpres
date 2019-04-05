import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class extends Component {
  static propTypes = {
    q: PropTypes.number
  }

//   {
//     "answers": {
//         "5633226290757632": {
//             "answer": 0,
//             "id": null
//         },
//         "5643172898144256": {
//             "answer": 1,
//             "id": null
//         }
//     },
//     "last_unanswered": null,
//     "questions": {
//         "5633226290757632": {
//             "choice": [
//                 {
//                     "id": 1,
//                     "text": "Pantai"
//                 },
//                 {
//                     "id": 2,
//                     "text": "Gunung"
//                 },
//                 {
//                     "id": 3,
//                     "text": "Neraka"
//                 }
//             ],
//             "question": "Kemana Anda ingin pergi berlibur?"
//         },
//         "5643172898144256": {
//             "choice": [
//                 {
//                     "id": 1,
//                     "text": "Ya"
//                 },
//                 {
//                     "id": 2,
//                     "text": "Tidak"
//                 }
//             ],
//             "question": "Apakah Anda setuju anggaran militer perlu dinaikkan?"
//         }
//     },
//     "status": "ok"
//  }

  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        next: this.props.q + 1,        
        answers: {},
        last_unanswered: 1,
        questions: {
          1: {
            id: 5633226290757632,
            choice: [
              {
                id: 1,
                text: "Pantai"
              },
              {
                id: 2,
                text: "Gunung"
              },
              {
                id: 3,
                text: "Neraka. Karena saya suka api dan panas. Saya anak Bekasi yang selalu terkena hawa panas yang ada di kota ini sehingga saya sangat suka dengan panas."
              }
            ],
            question: "Kemana Anda ingin pergi berlibur?",
            helper: "Pilih salah satu yang paling merepresentasikan Anda."
          },
          2: {
            id: 5643172898144256,
            choice: [
              {
                id: 1,
                text: "Ya"
              },
              {
                id: 2,
                text: "Tidak"
              }
            ],
            question: "Anggaran militer perlu dinaikkan",
            helper: "Setujukah Anda dengan pernyataan tersebut?"
          }
        }
    };
  }

  currentQuestion() {
    return this.state.questions[this.state.last_unanswered];
  }

  hasPrevQuestion() {
    const last_unanswered = this.state.last_unanswered;
    return last_unanswered - 1 > 0
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
    return last_unanswered + 1 <= Object.keys(questions).length
  }

  nextQuestion() {
    const last_unanswered = this.state.last_unanswered;

    if (!this.state.questions.hasOwnProperty(last_unanswered + 1)) {

    } else {
      // Send the answer
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
      answer: parseInt(e.currentTarget.id)
    };

    let answers = this.state.answers;
    answers[this.state.last_unanswered] = answer;
    this.setState(answers);
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

  failure() {
      return('Invalid input')
  }

  success() {
    return (
      <div>
        <div className="row">
          <div className="col-12 col-md-1">
            <h2>
              <span className="badge badge-secondary">{ this.state.last_unanswered }</span>
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
            { this.hasNextQuestion() ? (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.nextQuestion()}>
                { !this.hasAnswer() && <b>LEWATI&nbsp;&nbsp;&nbsp;</b> }<i className="fas fa-arrow-circle-right"/>
              </button>
            ) : (
              <Link href='/result'>
                <button
                  type="button"
                  className="btn btn-danger">
                  { !this.hasAnswer() && <b>LEWATI&nbsp;&nbsp;&nbsp;</b> }<i class="fas fa-check-circle"></i>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }

  render() {
      return(this.success())
  }
}
