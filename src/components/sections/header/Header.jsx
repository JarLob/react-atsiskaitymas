import Button from "../../other/button/Button"
import "./header.scss"

const Header = () => {

    return (
      <header className = "heading">
        <h1 className="logo">BU</h1>
        <Button name = "" action = {console.log("bum")}/>
        <Button name = "" action = {console.log("bam")}/>
      </header>
    );
  }
   
  export default Header;