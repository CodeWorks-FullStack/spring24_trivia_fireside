// @ts-ignore
const triviaApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&type=multiple',
  timeout: 8000
})


class QuestionsService {
  async getQuestions() {
    const response = await triviaApi.get()
    console.log('❓🤔 GOT QUESTIONS', response.data);
  }

}

export const questionsService = new QuestionsService()