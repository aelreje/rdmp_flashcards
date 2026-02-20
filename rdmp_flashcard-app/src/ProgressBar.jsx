import './App.css';

export default function ProgressBar({ current, total }) {
  let percentage = 0;

  if (total > 0) {
    const rawPercentage = (current / total) * 100;
    percentage = Math.min(100, Math.max(0, rawPercentage));
  }
  return (
    <div className="progress-bar-container">
      <div className="progress-track">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="progress-text">{current} of {total}</span>
    </div>
  );
}
