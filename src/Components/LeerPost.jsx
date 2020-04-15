import React from 'react';
import {firebase} from '../config/firebase';


function LeerPost() {
  
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {

    const obtenerDatos = async () => {

      try {

        const db = firebase.firestore();
        const data = await db.collection('posts').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        console.log(arrayData)
        setPosts(arrayData)

      }catch (error) {
        console.log(error)
      }
    }

    obtenerDatos()

  }, [])


  return (
    <div className="container">
      <ul>
        {
          posts.map(item => {
          return (
          <li key={item.id}>{item.text}</li>
          )})
        }        
      </ul>
    
    </div>
  );
}

export default LeerPost;