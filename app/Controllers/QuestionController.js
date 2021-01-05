import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";

function _drawQuestions(){
  let template = ''
  let questions = ProxyState.questions 
  questions.forEach(i => {
    i.answers = i.incorrect
    i.answers.splice(Math.floor(Math.random() * 3), 0, i.correct)
    template += i.Template
    document.getElementById('questions').innerHTML = template
  })
}
function _drawPoints(){
  document.getElementById('points').innerText = ProxyState.points.toString()
  document.getElementById('correct').innerText = ProxyState.correct.toString()
}

export default class QuestionController {
  constructor(){
    ProxyState.on('questions', _drawQuestions)
    ProxyState.on('points', _drawPoints)
    questionService.getQuestions()
  }
  judgeAnswer(answer, correct){
    // document.getElementById(`a${correct}`).disabled = true
    // document.getElementById(`b${correct}`).disabled = true
    // document.getElementById(`c${correct}`).disabled = true
    // document.getElementById(`d${correct}`).disabled = true
    console.log(answer, correct)
    if(answer == correct){
      questionService.updatePoints('correct')
    } else {
      questionService.updatePoints('wrong')
    }
  }
  moreQuestions(){
    questionService.getQuestions()
  }
}