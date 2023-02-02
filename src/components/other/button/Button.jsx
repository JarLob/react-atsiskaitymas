import "./button.scss"

const Button = (props) => {

    return (
        <button 
            className={`button ${props.name}`}
            onClick = {props.action}>
        </button>
    );
  }
   
  export default Button;