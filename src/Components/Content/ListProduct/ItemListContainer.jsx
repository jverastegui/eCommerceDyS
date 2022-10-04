import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainer() {

  const {id} = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {

    const db = getFirestore();
    const itemsCollection = collection(db, "Producto");
    const queryItems = id ? query(itemsCollection, where("IdCategoria", "==", id)) : itemsCollection;
    getDocs(queryItems).then((snapShot) => {
        if (snapShot.size > 0) {
            setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
        }
    });


  }, [id]);


  return (
   
        <ItemList lst={items}></ItemList>
     
  );
}

export default ItemListContainer;