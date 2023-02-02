import { useContext } from "react";

import PostContext from "../../contexts/PostContext";
import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"
import Post from "../post/Post";

import "./page-styles/page.scss"

const HomePage = () => {

  const { posts } = useContext(PostContext);

  return (
    posts ?
      <>
        <Header />
        <main>        
          <div className = "page homePage">
            <div className="cardsContainer">     
              {posts.map(post => 
                <Post key={post.id} heading={post.heading} content={post.content}/>  
              )}
            </div> 
          </div> 
        </main>
        <Footer />
      </> :
        <p>...Loding</p>
  );
}
 
export default HomePage;





