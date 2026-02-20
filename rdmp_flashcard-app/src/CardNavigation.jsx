import './App.css';

export default function CardNavigation({ onNext, onPrev, isFirst, isLast }) {
  return (
    <div className="navigation-container">
      <button 
        className="nav-button" 
        onClick={onPrev} 
        disabled={isFirst}
      >
        PREVIOUS
      </button>
      <button 
        className="nav-button" 
        onClick={onNext}
        disabled={isLast}
      >
        NEXT
      </button>
    </div>
  );
}
