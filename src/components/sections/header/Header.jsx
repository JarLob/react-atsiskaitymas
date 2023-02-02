import { COMPARISON_BINARY_OPERATORS } from "@babel/types";
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
              <Link className="link" to="/">Home</Link> 
              <Link className="link" to="/new-post">Create a post</Link>
            </nav> 
            : 
            <>
              <button className="loginButton">Log In</button>
              <button className = "registerButton">Register</button>
            </>
          
        }
      </header>
    );
  }
   
  export default Header;