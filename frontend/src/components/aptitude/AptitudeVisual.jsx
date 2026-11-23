import './aptitudeVisuals.css';

export default function AptitudeVisual() {
  return (
    <div className="apt-visual-stage">
      {/* Background Dot Matrix Pattern (SVG) */}
      <svg className="apt-dot-bg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="apt-dots-1" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" className="apt-dot-circle" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#apt-dots-1)" />
      </svg>

      <div className="apt-visual-content">
        {/* Question Pill */}
        <div className="apt-q-pill">
          <span className="apt-q-tag">«question»</span>
          <span className="apt-q-title">20% of 150 = ?</span>
        </div>

        {/* Breakdown note */}
        <p className="apt-q-note">150 split into 5 equal parts of 20%</p>

        {/* 5 Number Blocks */}
        <div className="apt-num-blocks-row">
          <div className="apt-num-col">
            <div className="apt-num-box active-blue">30</div>
            <span className="apt-percent-badge">20%</span>
          </div>
          <div className="apt-num-col">
            <div className="apt-num-box">30</div>
          </div>
          <div className="apt-num-col">
            <div className="apt-num-box stagger-1">30</div>
          </div>
          <div className="apt-num-col">
            <div className="apt-num-box stagger-2">30</div>
          </div>
          <div className="apt-num-col">
            <div className="apt-num-box stagger-3">30</div>
          </div>
        </div>

        {/* Answer Pill */}
        <div className="apt-ans-pill">Answer = 30 ✓</div>
      </div>
    </div>
  );
}
