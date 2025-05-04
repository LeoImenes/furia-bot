import image from "../../assets/heroGallery/heroGallery.png";
import "./styles.css";

export const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="hero-title">
        Seja bem-vindo à selva.
        <br />
        Aqui, a
        <span className="furia-highlight">
          <span className="furia-text">FURIA</span>
        </span>
        é eterna.
      </h1>
      <p className="hero-subtitle">
        Nascidos da garra brasileira e movidos pela paixão incontrolável pelo
        Counter-Strike, os jogadores da
        <span className="gray-italic"> FURIA</span>{" "}
        representam a força, a estratégia e o espírito de luta que conquistaram
        o mundo. Dentro do servidor, eles não jogam apenas por vitórias. Jogam
        pelo sonho, pela camisa, pelo orgulho de ser
        <span className="italic-bold"> FURIA</span>. Cada
        rodada é batalha. Cada clutch é história. Cada vitória é combustível
        para quem carrega o Brasil no peito.
      </p>
    </section>
  );
};