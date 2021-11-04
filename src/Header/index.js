import "./style.css";
import Menu from "../Menu";

const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <span>BEST</span>FLIX
      </h1>

      <Menu />
    </header>
  );
};

export default Header;
