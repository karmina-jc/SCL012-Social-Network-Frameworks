import React from "react";
import { firebase } from "../config/firebase";

function LeerPost() {
  const [posts, setPosts] = React.useState([]);
  const [post, setPost] = React.useState("");
  const [postImg, setPostImg] = React.useState(false);

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const db = firebase.firestore();
        const data = await db.collection("posts").get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(arrayData);
        setPosts(arrayData);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerDatos();
  }, []);

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
        img: postImg
      };

      const data = await db.collection("posts").add(newPost);
      setPost("");
      setPosts([...posts, { id: data.id, ...newPost }]);
    } catch (error) {
      console.log(error);
    }
  };

  const upImg = async (e) => {

    try {
      const storageRef = firebase.storage().ref();
      const imgFile = await storageRef.child('pictures/' + e.name).put(e);
      const imgUrl = await imgFile.ref.getDownloadURL();
      
      setPostImg(imgUrl)

    } catch (error) {
      console.log(error);
    }
    
  }  

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("posts").doc(id).delete();
      const actualPost = posts.filter((e) => e.id !== id);
      setPosts(actualPost);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        {posts.map((item) => {
          if (item.img !== false){ 
            return (
              <div key={item.id}>
                <div>
                  <p>{item.text}</p>              
                  <img src={item.img} alt="" />
                  <button onClick={() => eliminar(item.id)}>Eliminar</button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.id}>
                <p>{item.text}</p>              
                <button onClick={() => eliminar(item.id)}>Eliminar</button>
              </div>
            )
          }
        }
        )}

      </div>
      <h3>Nuevo Post</h3>
      <form onSubmit={adding}>
        <input
          type="text"
          placeholder="Escribe un nuevo post"
          onChange={(e) => setPost(e.target.value)}
          value={post}
        ></input>
        <button type="submit">Agregar</button>
        <input
        type="file"
        onChange={e => upImg(e.target.files[0])}
        />
      </form>
    </div>
  );
}

export default LeerPost;
