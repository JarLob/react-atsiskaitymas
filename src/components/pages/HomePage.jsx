import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"
import Post from "../post/Post";

import "./page-styles/page.scss"

const HomePage = () => {

  const [showHome, setShowHome] = useState(false);

  const { posts } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  //in case some enters /home without logging in
  useEffect(() => {
    loggedInUser ? setShowHome(true) : navigation('/Login');
  }, [loggedInUser, navigation]); 
  if (!showHome) {return null;}

  return (
    posts ?
      <>
        <Header /> 
        <main>        
          <div className = "page homePage">
            <div className="cardsContainer">
              {posts.length === 0 ?
                <span className="mainNotification">There are no posts to display</span> :                     
                posts.map(post => 
                  <Post key={post.id} heading={post.heading} content={post.content}/>  
                )
              }               
            </div> 
          </div> 
        </main>
        <Footer />
      </> :
        <span className="mainNotification">...Loding</span>
  );
}
 
export default HomePage;





