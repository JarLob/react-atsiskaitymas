import { createContext, useState, useEffect } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState(null); 

  const fetchPosts = async () => {
    const allPosts = await fetch('http://localhost:5000/posts')
      .then(res => res.json());
    setPosts(allPosts);
  }

  useEffect(()=>{
    fetchPosts();
  }, []);

  let post = (data) => {
    fetch('http://localhost:5000/posts', {
      method: "POST",
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
  };

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
    post(newPost);
  }  

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;