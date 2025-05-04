import { useState } from "react";
import { teamFuria } from "../../data/teamDataBase";
import { motion } from "framer-motion";
import logo from "../../assets/logos/logoinvisible.png";
import "./styles.css";

export default function Carousel() {
  const [current, setCurrent] = useState(3);

  const next = () => setCurrent((prev) => (prev + 1) % teamFuria.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + teamFuria.length) % teamFuria.length);

  return (
    <div className="session-container">
      <h1 className="carousel-title">Conheça nossa equipe</h1>
      <div className="carousel-container">
        <button className="nav-button left" onClick={prev}>
          ◀
        </button>
        <div className="cards-wrapper">
          {teamFuria.map((member, index) => {
            const distance = index - current;
            const isActive = distance === 0;
            const offset = distance * 320;

            return (
              <motion.div
                className={`card ${isActive ? "active" : "inactive"}`}
                key={member.name}
                style={{
                  transform: `translateX(${offset}px) scale(${
                    isActive ? 1 : 0.75
                  })`,
                  zIndex: 100 - Math.abs(distance),
                }}
              >
                <div className="name-container">
                  <img src={logo} alt="Logo Furia" className="logo" />
                  <h2>{member.name}</h2>
                  <img src={logo} alt="Logo Furia" className="logo" />
                </div>
                <img src={member.img} alt={member.name} className="card-img" />
                <p>{member.text}</p>
              </motion.div>
            );
          })}
        </div>
        <button className="nav-button right" onClick={next}>
          ▶
        </button>
      </div>
    </div>
  );
}
