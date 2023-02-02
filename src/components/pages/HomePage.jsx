import { useState, useEffect } from 'react';

import Header from "../sections/header/Header";
import Footer from "../sections/footer/Footer"
import Card from "../other/card/card";

import "./page-styles/page.scss"

const HomePage = () => {

  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null); 

  const fetchUsers = async () => {
    const users = await fetch('http://localhost:5000/users')
      .then(res => res.json());
    setUsers(users);
  }

  const fetchPosts = async () => {
    const allPosts = await fetch('http://localhost:5000/posts')
      .then(res => res.json());
    setPosts(allPosts);
  }

  useEffect(()=>{
    fetchUsers();
    fetchPosts();
  }, []);


  return (
    (posts && users) ?
      <>
        <Header />
        <main>        
          <div className = "page homePage">
            <div className="cardsContainer">     
              {posts.map(post => 
                <Card key={post.id} heading={post.heading} content={post.content}/>  
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





