import './footer.css';
import { LuArrowUpRight } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";

const footergroups = [
  {
    title: 'Learn',
    links: [
      { label: 'DSA Foundation', to: '#' },
      { label: 'Data Structures and Algorithms', to: '#' },
    ],
  },
  {
    title: 'Core CS',
    links: [
      { label: 'Operating Systems', to: '#' },
      { label: 'Databases and SQL', to: '#' },
    ],
  },
  {
    title: 'Backend Engineering',
    links: [
      { label: 'Low-Level Design Lab', to: '#' },
      { label: 'High-Level Design Lab', to: '#' },
    ],
  },
  {
    title: 'Company & Support',
    links: [
      { label: 'Pricing', to: '#' },
      { label: 'Bug Report', to: '#' },
    ],
  },
];

function Footer() {
  return (
    <footer className="xlrfootermain">
      <div className="xlrfootertitle">
        AlgorithmXlr8<span>.io</span>
      </div>

      <div className="xlrfootergroups">
        {footergroups.map(({ title, links }) => (
          <div key={title} className="xlrfootergroup">
            <p className="xlrfootercoltitle">{title}</p>

            <ul className="xlrfooterlist">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <a href={to} className="xlrfooterlink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
  
      <div className="xlrterms">
        <a href="#book-call" className="xlrcallbook">
          Want to talk to me one on one? Book a phone call
          <LuArrowUpRight className="xlrcall-arrow" size={15} />
        </a>

        <div className="xlr-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="xlr-social-btn">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="xlr-social-btn">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="xlr-social-btn">
            <FaLinkedin />
          </a>
          <a href="https://medium.com" target="_blank" rel="noreferrer" aria-label="Medium" className="xlr-social-btn">
            <PiMediumLogoFill />
          </a>
        </div>

        <div className="xlrpolicypage">
          <a href="#privacy">Privacy Policy</a>
          <span className="xlr-dot">·</span>
          <a href="#terms">Terms & Conditions</a>
          <span className="xlr-dot">·</span>
          <a href="#refund">Refund Policy</a>
          <span className="xlr-dot">·</span>
          <a href="#cancellation">Cancellation Policy</a>
        </div>

        <p className="xlrcopywrite">© {new Date().getFullYear()} AlgorithmXlr8.io. All rights reserved.</p>

        {/* Large Subtle Background Watermark Text */}
        <div className="xlr-watermark" aria-hidden="true">
          AlgorithmXlr8
        </div>
      </div>
    </footer>
  );
}

export default Footer;
