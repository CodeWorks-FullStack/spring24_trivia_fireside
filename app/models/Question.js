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
        <button class="btn btn-success">1</button>
      </div>
    </div>
    `
  }
}
