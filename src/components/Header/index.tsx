import furiaLogo from "../../assets/logos/furiaLogo.jpg";
import csLogo from "../../assets/logos/cs2Logo.png";
import "./styles.css";

export const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <img src={furiaLogo} alt="Logo" className="logo" />
        <h1 className="title">FURIA CS</h1>
      </div>
      <img src={csLogo} alt="Logo" className="cslogo" />
    </div>
  );
};
