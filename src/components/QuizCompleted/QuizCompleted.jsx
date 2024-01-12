import './QuizCompleted.css'
import trophyPng from '../../assets/trophy.png'
import correctPng from '../../assets/correct.png'
import wrongPng from '../../assets/wrong.png'
import QUESTIONS from '../../questions'


const QuizCompleted = ({ answers }) => {

  console.log(answers)

  const numberOfQuestions = QUESTIONS.length;

  const correctAnswers = answers.filter((ans, index) => ans === QUESTIONS[index].answers[0])
  console.log(correctAnswers)
  const wrongAnswers = answers.filter((ans, index) => ans !== QUESTIONS[index].answers[0])
  console.log(wrongAnswers)
  const correctPercent = correctAnswers.length / numberOfQuestions * 100;
  const wrongPercent = wrongAnswers.length / numberOfQuestions * 100;


  return (
    <div className='quiz-completed-component'>
      <img className='trophy-img' src={trophyPng} alt="Trophy image" />
      <h3>Quiz Completed</h3>
      <div className="result-summary">
        <div className='score-wrap'>
          <img className="correct-img" src={correctPng} alt="Correct image" />
          <p>{correctAnswers.length} correct answers. ({Math.round(correctPercent)}%)</p>
        </div>
        <div className='score-wrap'>
          <img className='wrong-img' src={wrongPng} alt="Wrong image" />
          <p>{wrongAnswers.length} wrong answers. ({Math.round(wrongPercent)}%)</p>
        </div>
    </div>
        {/* <div className="all-questions">
          {QUESTIONS.map(quest => (
            <p>{quest.question}</p>
          ))}
        </div> */}
      </div>
  )
}

export default QuizCompleted