import { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import logo from '../../assets/logo.jpeg';
import Button from '../../components/common/btn';
import './header.css';

const THEME_KEY = 'app-theme';

// Change these values in one place when you use your own brand.
const BRAND = {
  name: 'AlgorithmXlr8',
  suffix: '.io',
  tagline: 'Built by engineers, for engineers',
};

const menuItems = [
  {
    title: 'System Design',
    subtitle: 'System Design (Complete One)',
  },
  {
    title: 'Data Structure & Algorithms',
    subtitle: 'Master DSA Patterns & Core Concepts',
  },
  {
    title: 'Software Engineer Bucket',
    subtitle: 'Interview Preparation & Concepts',
  },
  {
    title: 'Engineering Newsletter',
    subtitle: 'System Design stories, every week',
  },
];

// Read the saved theme. localStorage can fail (private mode), so we use try/catch.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* ignore and use the default */
  }
  return 'dark';
}

function Header() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const toggleTheme = () => setTheme(nextTheme);

  return (
    <header className="header-wrapper">
      <div className="header">
        <a href="/" className="algobranding" aria-label={`${BRAND.name} home`}>
          <div className="algobranding-logo-wrap">
            <img src={logo} alt="" />
          </div>
          <div className="algobranding-content">
            <div className="algobranding-content-heading">
              {BRAND.name}
              <span className="io">{BRAND.suffix}</span>
            </div>
            <div className="algobranding-content-subheading">
              {BRAND.tagline}
            </div>
          </div>
        </a>

        <nav className="algo-content" aria-label="Main navigation">
          {menuItems.map((item) => (
            <button type="button" className="algo-content-item" key={item.title}>
              <span className="algo-content-item-text">
                <span className="algo-content-item-title">{item.title}</span>
                <span className="algo-content-item-subtitle">{item.subtitle}</span>
              </span>
              <FaAngleDown className="algo-chevron-icon" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="header-right">
          {/* Icon only. The aria-label is invisible and is for screen readers. */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
          >
            {theme === 'dark' ? (
              <IoSunnyOutline aria-hidden="true" />
            ) : (
              <IoMoonOutline aria-hidden="true" />
            )}
          </button>

          <Button
            text="Get Started"
            icon={<FaAngleRight />}
            iconPosition="right"
            className="hero-btn"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;