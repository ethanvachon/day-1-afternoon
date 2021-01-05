export default class Question {
  constructor({category, correct_answer, difficulty, incorrect_answers, question, type}) {
    this.category = category
    this.correct = correct_answer
    this.difficulty = difficulty 
    this.incorrect = incorrect_answers
    this.question = question
    this.type = type
    this.answers = []
  }
  get Template(){
    return `
    <div class="row bg-dark mb-5">
    <div class="col-12 my-2 text-center text-light">
    <h1>${this.question}</h1>
    </div>
    <div class="col-12 d-flex justify-content-around mb-5">
    <button class="btn btn-outline-success" id="a${this.correct}" onclick="app.questionController.judgeAnswer('${this.answers[0]}', '${this.correct}')">${this.answers[0]}</button>
    <button class="btn btn-outline-success" id="b${this.correct}" onclick="app.questionController.judgeAnswer('${this.answers[1]}', '${this.correct}')">${this.answers[1]}</button>
    <button class="btn btn-outline-success" id="c${this.correct}" onclick="app.questionController.judgeAnswer('${this.answers[2]}', '${this.correct}')">${this.answers[2]}</button>
    <button class="btn btn-outline-success" id="d${this.correct}" onclick="app.questionController.judgeAnswer('${this.answers[3]}', '${this.correct}')">${this.answers[3]}</button>
    </div>
    </div>`
  }
}