import './aptitudeVisuals.css';

export default function VerbalVisual() {
  return (
    <div className="apt-visual-stage">
      {/* Background Dot Matrix Pattern (SVG) */}
      <svg className="apt-dot-bg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="apt-dots-3" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" className="apt-dot-circle" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#apt-dots-3)" />
      </svg>

      <div className="apt-visual-content">
        {/* Question Pill */}
        <div className="apt-q-pill">
          <span className="apt-q-tag">«synonym»</span>
          <span className="apt-q-title">RAPID means ?</span>
        </div>

        {/* 4 Verbal Options Row */}
        <div className="verbal-options-row">
          <div className="verbal-opt-btn wrong">
            <span>Slow</span>
            <span className="cross-mark" aria-hidden="true">✕</span>
          </div>

          <div className="verbal-opt-btn correct-green">
            <span>Quick</span>
          </div>

          <div className="verbal-opt-btn wrong">
            <span>Late</span>
            <span className="cross-mark" aria-hidden="true">✕</span>
          </div>

          <div className="verbal-opt-btn wrong">
            <span>Weak</span>
            <span className="cross-mark" aria-hidden="true">✕</span>
          </div>
        </div>

        {/* Answer Pill */}
        <div className="apt-ans-pill">RAPID = QUICK ✓</div>
      </div>
    </div>
  );
}
