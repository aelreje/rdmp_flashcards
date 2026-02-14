import { useState } from 'react'
import './App.css'


const flashcardsData = [
  {
    id: 1,
    question: '',
    answer: '',
    explanation: '',
  },
  {
    id: 2,
    question: '',
    answer: '',
    explanation: '',
  },
  {
    id: 3,
    question: '',
    answer: '',
    explanation: '',
  },
  {
    id: 4,
    question: '',
    answer: '',
    explanation: '',
  },
  {
    id: 5,
    question: '',
    answer: '',
    explanation: '',
  }
  
]




function App() {
  
  return (
    <>
      <div className="card">
        <div className="progress-bar">

        </div>

        {/* ending note: girl u r still thinking of coding in html, use the "Atoms" & other available components next time !! */}


      </div>
      <div className="navigation-buttons">

      </div>
      
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
