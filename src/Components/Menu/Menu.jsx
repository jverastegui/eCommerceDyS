import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const Menu = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, "Categoria");
        getDocs(itemsCollection).then((snapShot) => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
            }
        });


    });

    return (
        <aside className="left-sidebar">

            <div className="scroll-sidebar">

                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal"></i> <span className="hide-menu">Personal</span></li>
                        {
                            items.map(it => {
                                return <li className="sidebar-item" key={it.id}>
                                    <Link className="sidebar-link waves-effect waves-dark" to={'/category/' + it.id} >
                                        <i className="mdi mdi-view-dashboard"></i><span className="hide-menu">{it.nombre} </span>
                                    </Link>
                                </li>
                            })
                        }


                    </ul>
                </nav>

            </div>
        </aside>

    )
}

export default Menu;