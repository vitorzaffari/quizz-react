import './QuizContainer.css'
import QUESTIONS from '../../questions'
import { useCallback, useState } from 'react';
import QuizCompleted from '../QuizCompleted/QuizCompleted';
import QuestionTimer from '../QuestionTimer/QuestionTimer';


const QuizContainer = () => {
    const [answers, setAnswer] = useState([])

    let currentQuestionIndex = answers.length;

    const isOver = currentQuestionIndex === QUESTIONS.length;

    const addAnswer = useCallback(function addAnswer(answer) {
        setAnswer(prev => {
            return [...prev, answer]
        })
    }, [])


    if (isOver) {
        return (
            <QuizCompleted answers={answers}/>
        )
    }

    let difficultyTag = QUESTIONS[currentQuestionIndex].difficulty

    let shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)


    const alternatives = shuffledAnswers.map(alternative => (
        <li className='alternative' key={alternative}><button onClick={() => addAnswer(alternative)}>{alternative}</button></li>
    ))

    return (
        <div className='quiz-container-component'>
            <QuestionTimer key={currentQuestionIndex} timeout={10000} onTimeout={() => addAnswer(null)} />
            <span className={`difficulty-tag ${difficultyTag}`}>{QUESTIONS[currentQuestionIndex].difficulty}</span>
            <span className="question-number">{currentQuestionIndex + 1}/{QUESTIONS.length}</span>
            <h3 className='question'>{QUESTIONS[currentQuestionIndex].question}</h3>
            <div className="alternatives-container">
                {alternatives}
            </div>
        </div>
    )
}

export default QuizContainer