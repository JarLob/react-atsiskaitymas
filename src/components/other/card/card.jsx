import "./card.scss"

const Card = (props) => {

    return (
        <article className="card">
            <h3 className="cardHeading">{props.heading}</h3>
            <p className="cardContent">{props.content}</p>
        </article>
    );
  }
   
  export default Card;