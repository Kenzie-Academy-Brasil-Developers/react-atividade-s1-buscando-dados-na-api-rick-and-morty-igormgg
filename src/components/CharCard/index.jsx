import "./styles.css";

const CharCard = ({ character: { name, image, status } }) => {
  return (
    <div className="card">
      {status == "Alive" ? (
        <div className="card__alive">
          <p> {name} </p>
          <p> {status} </p>
          <img src={image} alt={name} />
        </div>
      ) : (
        <div className="card__dead">
          <p> {name} </p>
          <p> {status} </p>
          <img src={image} alt={name} />
        </div>
      )}
    </div>
  );
};

export default CharCard;

// {status == 'Alive' ? (<p id='alive'> {status} </p>) : (<p id='dead'> {status} </p>)}
