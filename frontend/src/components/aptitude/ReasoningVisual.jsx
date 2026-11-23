import './aptitudeVisuals.css';

export default function ReasoningVisual() {
  return (
    <div className="apt-visual-stage">
      {/* Background Dot Matrix Pattern (SVG) */}
      <svg className="apt-dot-bg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="apt-dots-2" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" className="apt-dot-circle" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#apt-dots-2)" />
      </svg>

      <div className="apt-visual-content">
        {/* Question Pill */}
        <div className="apt-q-pill">
          <span className="apt-q-tag">«find the next number»</span>
        </div>

        {/* Series Logic with SVG Arcs */}
        <div className="reasoning-wrapper" style={{ marginTop: '14px' }}>
          {/* SVG Overlay for curved jump arrows and operation badges */}
          <svg className="reasoning-svg-overlay" viewBox="0 0 300 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow-blue" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#3b82f6" />
              </marker>
              <marker id="arrow-red" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
              </marker>
            </defs>

            {/* Arc 1: 2 -> 4 */}
            <path d="M 26 40 Q 57 12 88 40" stroke="#3b82f6" strokeWidth="1.8" className="reasoning-arc arc-1" markerEnd="url(#arrow-blue)" />
            {/* Arc 2: 4 -> 8 */}
            <path d="M 88 40 Q 119 12 150 40" stroke="#3b82f6" strokeWidth="1.8" className="reasoning-arc arc-2" markerEnd="url(#arrow-blue)" />
            {/* Arc 3: 8 -> 16 */}
            <path d="M 150 40 Q 181 12 212 40" stroke="#3b82f6" strokeWidth="1.8" className="reasoning-arc arc-3" markerEnd="url(#arrow-blue)" />
            {/* Arc 4: 16 -> 32 (Red final step) */}
            <path d="M 212 40 Q 243 12 274 40" stroke="#ef4444" strokeWidth="1.8" className="reasoning-arc arc-4" markerEnd="url(#arrow-red)" />

            {/* Badges placed at peak of arcs */}
            <foreignObject x="46" y="2" width="26" height="18">
              <span className="reasoning-badge-pill blue pill-1">×2</span>
            </foreignObject>
            <foreignObject x="108" y="2" width="26" height="18">
              <span className="reasoning-badge-pill blue pill-2">×2</span>
            </foreignObject>
            <foreignObject x="170" y="2" width="26" height="18">
              <span className="reasoning-badge-pill blue pill-3">×2</span>
            </foreignObject>
            <foreignObject x="232" y="2" width="26" height="18">
              <span className="reasoning-badge-pill red pill-4">×2</span>
            </foreignObject>
          </svg>

          {/* Sequence Boxes */}
          <div className="reasoning-boxes-row">
            <div className="reasoning-box">2</div>
            <div className="reasoning-box">4</div>
            <div className="reasoning-box">8</div>
            <div className="reasoning-box">16</div>
            <div className="reasoning-box target-green">32</div>
          </div>
        </div>

        {/* Answer Pill */}
        <div className="apt-ans-pill">16 × 2 = 32 ✓</div>
      </div>
    </div>
  );
}
