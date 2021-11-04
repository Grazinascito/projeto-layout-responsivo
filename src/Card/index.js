import "./style.css";

const Card = ({ title, cover }) => {
  return (
    <div
      className="container-card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="container-title">
          <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
