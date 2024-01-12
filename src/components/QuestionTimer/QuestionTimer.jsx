import { useEffect, useState } from 'react'
import './QuestionTimer.css'

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTimer, setRemainingTimer] = useState(timeout);


    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)
        return () => {
            clearTimeout(timer)
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTimer(prev => prev - 10)
        }, 10)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='question-timer-component'>
            <progress max={timeout} value={remainingTimer}>QuestionTimer</progress>
        </div>
    )
}

export default QuestionTimer