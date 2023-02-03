import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../post/post.scss';

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"

const Registration = () => {

  const [formInputs, setFormInputs] = useState({
    email: '',
    password1: '',
    password2: ''
  });
  const [existingEmail, setExistingEmail] = useState(false);
  const [notMatching, setNotMatching] = useState(false);
  const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
  
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    setFormInputs({...formInputs, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(users.find(user => user.email === formInputs.email)){
      setExistingEmail(true);
    } else if(formInputs.password1 !== formInputs.password2) {
      setNotMatching(true);
      console.log(notMatching);
    } else {
      let newUser = {
        email: formInputs.email,
        password: formInputs.password1,
        id: Date.now()
      };
      console.log(newUser);
      addNewUser(newUser);
      setLoggedInUser(newUser);
      navigation('/');
    }
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
                  name="password1"
                  value={formInputs.password1}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Repeat password:
                <input
                  type="password"
                  name="password2"
                  value={formInputs.password2}
                  onChange={handleInputChange}
                />
              </label>
              <input type="submit" value="Log In" />
              {existingEmail && <span className="notification">*User with this e-mail already exists</span>}
              {notMatching && <span className="notification">*Passwords do not match</span>}
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }
   
  export default Registration;