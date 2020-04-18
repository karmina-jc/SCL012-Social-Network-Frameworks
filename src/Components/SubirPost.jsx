import React from "react";
import { firebase } from "../config/firebase";

function SubirPost() {
  const [post, setPost] = React.useState("");

  const adding = async (e) => {
    e.preventDefault();
    if (!post.trim()) {
      console.log("ingrese texto");
      return;
    }
    console.log(post);

    try {
      const db = firebase.firestore();
      const newPost = {
        text: post,
      };

      const data = await db.collection("posts").add(newPost);
      setPost("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3>Nuevo Post</h3>
      <form onSubmit={adding}>
        <input
          type="text"
          placeholder="Escribe un nuevo post"
          onChange={(e) => setPost(e.target.value)}
          value={post}
        ></input>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default SubirPost;
