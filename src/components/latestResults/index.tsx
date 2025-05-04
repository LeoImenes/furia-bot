import { useState } from 'react';
import './styles.css';

import furiaLogo from '../../assets/logos/logoinvisible.png';
import mongolzLogo from '../../assets/logos/mongolz.png';
import virtusproLogo from '../../assets/logos/vp.png';
import complexityLogo from '../../assets/logos/col.png';

const results = [
  {
    date: '09/04/2025',
    tournament: 'PGL Bucharest 2025',
    matches: [
      { team1: 'FURIA', score1: 0, logo1: furiaLogo, team2: 'MONGOLZ', score2: 2, logo2: mongolzLogo },
    ]
  },
  {
    date: '08/04/2025',
    tournament: 'PGL Bucharest 2025',
    matches: [
      { team1: 'FURIA', score1: 0, logo1: furiaLogo, team2: 'VIRTUS PRO', score2: 2, logo2: virtusproLogo },
    ]
  },
  {
    date: '07/04/2025',
    tournament: 'PGL Bucharest 2025',
    matches: [
      { team1: 'FURIA', score1: 1, logo1: furiaLogo, team2: 'COMPLEXITY', score2: 2, logo2: complexityLogo },
    ]
  }
];

export const LatestResults = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <div className="latest-results">
      <h2>Últimos Resultados</h2>

      <div className="results-grid">
        {results.map((result, index) => (
          <div key={index} className="result-card">
            <div className="header">
              <span>{result.tournament}</span>
              <span>{result.date}</span>
            </div>
            {result.matches.map((match, i) => (
              <div className="match" key={i}>
                <div className={`team ${match.score1 > match.score2 ? 'winner' : 'loser'}`}>
                  <img src={match.logo1} alt={match.team1} />
                  <span>{match.team1}</span>
                  <strong>{match.score1}</strong>
                </div>
                <span className="vs">VS</span>
                <div className={`team ${match.score2 > match.score1 ? 'winner' : 'loser'}`}>
                  <img src={match.logo2} alt={match.team2} />
                  <span>{match.team2}</span>
                  <strong>{match.score2}</strong>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mobile-slider">
        <button onClick={prevSlide} className="nav-button left">&lt;</button>
        <div className="slide">
          <div className="result-card">
            <div className="header">
              <span>{results[currentSlide].tournament}</span>
              <span>{results[currentSlide].date}</span>
            </div>
            {results[currentSlide].matches.map((match, i) => (
              <div className="match" key={i}>
                <div className={`team ${match.score1 > match.score2 ? 'winner' : 'loser'}`}>
                  <img src={match.logo1} alt={match.team1} />
                  <span>{match.team1}</span>
                  <strong>{match.score1}</strong>
                </div>
                <span className="vs">VS</span>
                <div className={`team ${match.score2 > match.score1 ? 'winner' : 'loser'}`}>
                  <img src={match.logo2} alt={match.team2} />
                  <span>{match.team2}</span>
                  <strong>{match.score2}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="nav-button right">&gt;</button>
      </div>
    </div>
  );
};
