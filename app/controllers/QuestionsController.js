import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

export class QuestionsController {

  constructor() {
    AppState.on('activeQuestion', this.drawQuestion)

    this.getQuestions()
  }

  async getQuestions() {
    try {
      console.log('We are getting the questions (hopefully)');
      await questionsService.getQuestions()
    } catch (error) {
      console.error('ATTEMPING TO GET QUESTIONS', error)
      Pop.error(error)
    }
  }

  drawQuestion() {
    const question = AppState.activeQuestion

    setHTML('currentQuestion', question.CurrentQuestionTemplate)
  }

  guessAnswer(answer) {
    console.log(answer);
  }
}