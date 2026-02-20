import { useState } from 'react'
import './App.css'

function Flashcard(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div 
            className={`flashcard-content ${isFlipped ? 'flipped' : ''}`}
            onClick={handleClick}
        >
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h2>{props.question}</h2>
                    <p className="hint">Click to flip</p>
                </div>
                <div className="flashcard-back">
                    <h2>{props.answer}</h2>
                    <p className="explanation">{props.explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default Flashcard
