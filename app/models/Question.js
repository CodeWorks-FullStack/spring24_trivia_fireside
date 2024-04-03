export class Question {
  constructor(data) {
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get CurrentQuestionTemplate() {
    return `
    <div>
      <h2>${this.question}</h2>
      <h3>Category: ${this.category} || Difficulty: ${this.difficulty}</h3>
      <div>
        ${this.AnswerButtons}
      </div>
    </div>
    `
  }

  get AnswerButtons() {
    const answers = [...this.incorrectAnswers]

    const randomIndex = Math.floor(Math.random() * (answers.length + 1))

    answers.splice(randomIndex, 0, this.correctAnswer)

    let htmlString = ''

    answers.forEach(answer => htmlString += `
    <button onclick="app.QuestionsController.guessAnswer('${answer}')" class="btn btn-success">${answer}</button>
    `)

    return htmlString
  }
}
