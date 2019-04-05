import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class extends Component {
  static propTypes = {
    q: PropTypes.number
  }

  // {
  //   "questions": {
  //       "5633226290757632": {
  //           "choice": [
  //               {
  //                   "id": 1,
  //                   "reason": "text and <html/>",
  //                   "result": 1,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Pantai"
  //               },
  //               {
  //                   "id": 2,
  //                   "reason": "text and <html/>",
  //                   "result": 2,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Gunung"
  //               },
  //               {
  //                   "id": 3,
  //                   "reason": "text and <html/>",
  //                   "result": 0,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Neraka"
  //               }
  //           ],
  //           "question": "Kemana Anda ingin pergi berlibur?"
  //       },
  //       "5643172898144256": {
  //           "choice": [
  //               {
  //                   "id": 1,
  //                   "reason": "text and <html/>",
  //                   "result": 2,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Ya"
  //               },
  //               {
  //                   "id": 2,
  //                   "reason": "text and <html/>",
  //                   "result": 1,
  //                   "sources": [
  //                       "http://",
  //                       "http://"
  //                   ],
  //                   "text": "Tidak"
  //               }
  //           ],
  //           "question": "Apakah Anda setuju anggaran militer perlu dinaikkan?"
  //       }
  //   },
  //   "stance": {
  //       "2": 1
  //   },
  //   "status": "ok"
  // }

  constructor (props) {
    super(props);
    this.state = {
        ...this.props,
        current_question: 1,
        questions: {
          1: {
              id: 5633226290757632,
              choice: [
                {
                    id: 1,
                    reason: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    result: 1,
                    sources: [
                        "http://",
                        "http://"
                    ],
                    text: "Pantai"
                },
                {
                    id: 2,
                    reason: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    result: 2,
                    sources: [
                        "http://",
                        "http://"
                    ],
                    text: "Gunung"
                },
                {
                    id: 3,
                    reason: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    result: 0,
                    sources: [
                        "http://",
                        "http://"
                    ],
                    text: "Neraka"
                }
              ],
              question: "Kemana Anda ingin pergi berlibur?"
          },
          2: {
            id: 5643172898144256,
              choice: [
                  {
                      id: 1,
                      reason: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                      result: 2,
                      sources: [
                          "http://",
                          "http://"
                      ],
                      text: "Ya"
                  },
                  {
                      id: 2,
                      reason: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                      result: 1,
                      sources: [
                          "http://",
                          "http://"
                      ],
                      text: "Tidak"
                  }
              ],
              question: "Apakah Anda setuju anggaran militer perlu dinaikkan?"
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
    return current_question - 1 > 0
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
    return current_question + 1 <= Object.keys(questions).length
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
          <div className="col">
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
