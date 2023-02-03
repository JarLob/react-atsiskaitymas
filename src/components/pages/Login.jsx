import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../post/post.scss';

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"

const Login = () => {

  const navigation = useNavigate();

  const [formInputs, setFormInputs] = useState({
    email : '',
    password : ''
  });
  const [correctLogin, setCorrectLogin] = useState(true);
  const { users, setLoggedInUser } = useContext(UserContext);
 
  const handleInputChange = (e) => {
    setFormInputs({...formInputs, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser= users.find(user => user.username === formInputs.username && user.password === formInputs.password);
    if (existingUser){
        setLoggedInUser(existingUser);
        navigation('/home');
      } else {
      setCorrectLogin(false)
    };    
  }

    return (
      <>
        <Header />
        <main>
          <div className = "formContainer registration"> 
            <form className = "loginForm" onSubmit={handleSubmit}>
              <label>
                E-mail:
                <input 
                  type="email"
                  name="email"
                  value={formInputs.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formInputs.password}
                  onChange={handleInputChange}
                />
              </label>
              <input type="submit" value="Log In" />
              {!correctLogin && <span className="notification">*Wrong log in info</span>}
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }
   
  export default Login;