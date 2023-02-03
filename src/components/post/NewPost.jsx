import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"

import UserContext from "../../contexts/UserContext";
import PostContext from "../../contexts/PostContext";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {

  const { loggedInUser } = useContext(UserContext);
  const { addNewPost } = useContext(PostContext);

  const [formInputs, setFormInputs] = useState({
    heading: '',
    content: ''
  });

  const navigation = useNavigate();

  const handleInputChange = (e) => {
    setFormInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const submitHandler = (e) => {
    e.preventDefault();    
    const newPost = {
      heading: formInputs.heading,
      content: formInputs.content,
      id: Date.now(),
      userId: loggedInUser.id
    }
    addNewPost(newPost);   
    setFormInputs({
      heading: '',
      content: ''
    });
    navigation('/home');
  }

    return (
      <>
        <Header />
        <main>
          <div className="formContainer">
            <form className = "newPost" onSubmit={submitHandler}>
              <label>
                Heading:
                <input type="text" name="heading"
                  value={formInputs.heading}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Content:
                <textarea 
                  name="content"
                  value={formInputs.content}
                  onChange={handleInputChange}
                  maxLength = "200"
                  required
                />
              </label>
              <input type="submit" />
            </form>
          </div>
        </main>
        <Footer />
      </>
    );
  }
   
  export default NewPost;