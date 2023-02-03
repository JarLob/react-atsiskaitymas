import { useContext } from "react";
import { Link } from 'react-router-dom';

import UserContext from "../../../contexts/UserContext";
import "./header.scss"

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

    return (
      <header className = "header">
        <h1 className="logo">BU</h1>
        {
          loggedInUser ?
            <nav>
              <Link className="navigationLink" to="/">Home</Link> 
              <Link className="navigationLink" to="/new-post">Create a post</Link>
            </nav> 
            : 
            <>
              <div className="loginButton">
                <Link className="link" to="/login">Log in</Link>
              </div>
              <div className = "registerButton">
                <Link className="link" to="/registration">Registration</Link>
              </div>
            </>
          
        }
      </header>
    );
  }
   
  export default Header;