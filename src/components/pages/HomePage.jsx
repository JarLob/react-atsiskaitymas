import { useContext } from "react";

import PostContext from "../../contexts/PostContext";
import UserContext from "../../contexts/UserContext";

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"
import Post from "../post/Post";

import "./page-styles/page.scss"

const HomePage = () => {

  const { posts } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    posts ?
      <>
        <Header />
        { loggedInUser &&   
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
        }
        <Footer />
      </> :
        <span className="mainNotification">...Loding</span>
  );
}
 
export default HomePage;





