import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js"

export class QuestionsController {

  constructor() {
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
}