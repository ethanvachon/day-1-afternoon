import {ProxyState} from "../AppState.js"
import {triviApi} from "../Services/AxiosService.js"
import Question from "../Models/Questions.js"

class QuestionService {
  async getQuestions(){
    let result = await triviApi.get('')
    ProxyState.questions = result.data.results.map(i => new Question(i))
  }
  updatePoints(verdict){
    if(verdict == 'correct'){
      ProxyState.correct++
      ProxyState.points++
    } else {
      ProxyState.points--
    }
  }
}

export const questionService = new QuestionService()