import "./post.scss"

const Post = (props) => {

    return (
        <article className="post">
            <h3 className="postHeading">{props.heading}</h3>
            <p className="postContent">{props.content}</p>
        </article>
    );
  }
   
  export default Post;