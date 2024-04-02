import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

// @ts-ignore
const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&type=multiple',
  timeout: 8000
})


class QuestionsService {
  async getQuestions() {
    const response = await triviaApi.get()
    console.log('❓🤔 GOT QUESTIONS', response);
    const newQuestions = response.data.results.map(pojo => new Question(pojo))
    AppState.questions = newQuestions
    console.log(AppState.questions);
  }

}

export const questionsService = new QuestionsService()