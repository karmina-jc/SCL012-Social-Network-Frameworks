import React from "react";
import { firebase } from "../config/firebase";

function LeerPost() {
  const [posts, setPosts] = React.useState([]);

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
          return (
            <div>
              <p key={item.id}>{item.text}</p>
              <button onClick={() => eliminar(item.id)}>Eliminar</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeerPost;
