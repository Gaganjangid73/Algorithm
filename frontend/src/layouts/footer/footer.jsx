import './footer.css';
import { TiLocationArrow } from "react-icons/ti";
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
          <p className='xlrcallbook'>want to talk to me one on one? Book a phone call <span> <TiLocationArrow size={16} /> </span> </p>
           <div className='xlr-social'>
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedin />
              <PiMediumLogoFill />
           </div>
           <div className='xlrpolicypage'>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Refund Policy</li>
                <li>Cancellation Policy</li>
            </ul>
           </div>
            <p className='xlrcopywrite'>© {new Date().getFullYear()} AlgorithmXlr8.io. All rights reserved.</p>
    </div>
   
    </footer>
  );
}

export default Footer;
