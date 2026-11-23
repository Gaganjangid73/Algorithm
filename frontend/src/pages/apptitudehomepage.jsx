import "./apptitudehomepage.css";
import Header from "../layouts/header/header.jsx";
import Footer from "../layouts/footer/footer.jsx";
import AptitudeVisual from "../components/aptitude/AptitudeVisual.jsx";
import ReasoningVisual from "../components/aptitude/ReasoningVisual.jsx";
import VerbalVisual from "../components/aptitude/VerbalVisual.jsx";

const aptitudeTopics = [
  {
    id: "aptitude",
    title: "Master Aptitude",
    desc: "Number system, percentages, profit and loss, time and work, speed and distance, probability and data interpretation, with the shortcuts that save minutes in every test.",
    meta: "17 modules · 124 topics",
    visual: <AptitudeVisual />,
  },
  {
    id: "reasoning",
    title: "Master Reasoning",
    desc: "Series, coding and decoding, blood relations, directions, seating arrangements, puzzles, syllogisms and non-verbal reasoning, solved one clear step at a time.",
    meta: "15 modules · 103 topics",
    visual: <ReasoningVisual />,
  },
  {
    id: "verbal",
    title: "Master Verbal Ability",
    desc: "Vocabulary, grammar, error spotting, sentence correction, para jumbles, reading comprehension and critical reasoning for every verbal section.",
    meta: "10 modules · 52 topics",
    visual: <VerbalVisual />,
  },
];

function AptitudeHomePage() {
  return (
    <>
      <Header />
      <div className="aptitude-container">
        <h1 className="xlr-apptitude-title">
          Master Your <span>Logical Thinking</span> Skills
        </h1>
        <p className="xlr-apptitude-subtitle">
          Build sharp problem solving skills with simple lessons and exam style practice for every topic. Highly recommended for on campus and off campus placements.
        </p>

        <section className="xlr-prblm-skill-set">
          <h3 className="xlr-section-heading">
            Aptitude, Reasoning &amp; Verbal Ability (Systematic Way)
          </h3>

          <div className="xlr-aptitude-cards-grid">
            {aptitudeTopics.map((topic) => (
              <div key={topic.id} className="xlr-apt-card">
                {/* Animated Top Visual Stage */}
                <div className="xlr-apt-card-visual">
                  {topic.visual}
                </div>

                {/* Card Content & Meta */}
                <div className="xlr-apt-card-body">
                  <h3 className="xlr-apt-card-title">{topic.title}</h3>
                  <p className="xlr-apt-card-desc">{topic.desc}</p>
                  <p className="xlr-apt-card-meta">{topic.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AptitudeHomePage;
