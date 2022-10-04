import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {

        const db = getFirestore();
        const response = doc(db, "Producto", id);
        getDoc(response).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            }            
        });
    }, [id]);

    return (
       
            <ItemDetail item={item}></ItemDetail>
       
    );
}

export default ItemDetailContainer;