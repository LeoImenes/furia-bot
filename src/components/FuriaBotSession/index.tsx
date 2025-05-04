import React from "react";
import "./styles.css";
import chatbotImage from "../../assets/chatbotImage.png";

interface FuriaBotSectionProps {
  setOpenbySession: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FuriaBotSection: React.FC<FuriaBotSectionProps> = ({ setOpenbySession }) => {
  return (
    <section className="furia-showcase">
    <div className="furia-card">
      <div className="furia-info">
        <h2>FuriaBot: Seu novo parceiro de jogo</h2>

        <ul>
          <li>Próximos jogos da FURIA</li>
          <li>Conheça os jogadores</li>
          <li>Histórico de confrontos</li>
          <li>Curiosidades da equipe</li>
        </ul>
        <button className="open-chat" onClick={() => {setOpenbySession((prev) => !prev)}}>Abrir Chat</button>
      </div>
      <div className="furia-img-wrapper">
        <img src={chatbotImage} alt="FuriaBot" />
      </div>
    </div>
  </section>
  );
};
