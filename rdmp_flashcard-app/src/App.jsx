import { useState } from 'react'
import './App.css'
import ProgressBar from './ProgressBar'
import CardNavigation from './CardNavigation'
import Flashcard from './Flashcard'

const flashcardsData = [
  {
    id: 1,
    question: "What famous phrase does RuPaul say to the bottom two queens right before they lip-sync to avoid elimination?",
    answer: "\"Good luck, and don't f*ck it up.\"",
    explanation: "This iconic catchphrase is said by RuPaul in almost every single episode to set the stakes before the queens perform their 'Lip Sync For Your Life.'"
  },
  {
    id: 2,
    question: "In 'The Devil Wears Prada', what is the name of the demanding, high-powered fashion magazine editor played by Meryl Streep?",
    answer: "Miranda Priestly",
    explanation: "Meryl Streep's legendary portrayal of Miranda Priestly, the terrifying editor-in-chief of Runway magazine, earned her an Academy Award nomination and gave pop culture endless quotable moments."
  },
  {
    id: 3,
    question: "Which popular Broadway musical tells the story of the Witches of Oz from their perspective, featuring the hit song 'Defying Gravity'?",
    answer: "Wicked",
    explanation: "Long before Dorothy dropped in, this acclaimed musical explores the unlikely friendship between Elphaba, the Wicked Witch of the West, and Glinda the Good."
  },
  {
    id: 4,
    question: "Which acclaimed indie-rock singer-songwriter had a massive viral hit on social media with her emotionally resonant song 'Washing Machine Heart'?",
    answer: "Mitski",
    explanation: "The track from her 2018 album 'Be the Cowboy' became a massive sensation on platforms like TikTok, introducing a whole new generation of fans to her poignant lyrics and distinct sound."
  },
  {
    id: 5,
    question: "In Vince Gilligan's Apple TV+ series 'Pluribus', what is the name of the acclaimed 'Better Call Saul' actress who stars as the lead character, Carol Sturka?",
    answer: "Rhea Seehorn",
    explanation: "After her breakout, Emmy-nominated performance as Kim Wexler in 'Better Call Saul', Rhea Seehorn reunited with creator Vince Gilligan to star in this sci-fi series about a novelist immune to a virus that turns humanity into a hive mind."
  }
]

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // 0 = Welcome Screen, 1...N = Cards
  const totalCards = flashcardsData.length;

  const handleNext = () => {
    if (currentIndex < totalCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentCard = currentIndex > 0 ? flashcardsData[currentIndex - 1] : null;

  return (
    <div className="app-container">
      <div className="card-wrapper">
        <header className="card-header">
           <ProgressBar current={currentIndex} total={totalCards} />
        </header>

        <main className="card-content">
          {currentIndex === 0 ? (
            <div className="welcome-card">
              <h1>Hi!</h1>
              <p>To start reviewing the flashcards, click the next button.</p>
            </div>
          ) : (
            <Flashcard 
              key={currentCard.id} // Forces re-render to reset flip state on new card
              question={currentCard.question}
              answer={currentCard.answer}
              explanation={currentCard.explanation}
            />
          )}
        </main>

        <footer className="card-footer">
          <CardNavigation 
            onNext={handleNext} 
            onPrev={handlePrev} 
            isFirst={currentIndex === 0}
            isLast={currentIndex === totalCards}
          />
        </footer>
      </div>
    </div>
  )
}

export default App
