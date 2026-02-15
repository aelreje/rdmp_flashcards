import { useState } from 'react'

function Flashcard(props) {
    const [isFlipped, setisFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <div 
            className="card"
            onClick={handleClick}
            style={{
                backgroundColor: isFlipped ? '#2ecc271' : '#fff',
                color: isFlipped ? '#fff' : '#000'
            }}
        >
            <p>
                {isFlipped ? props.answer : props.question}
            </p>
        </div>
    )
}

export default Flashcard