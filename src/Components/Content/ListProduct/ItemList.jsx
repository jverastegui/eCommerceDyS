import React from "react";
import Item from "./Item";

const ItemList = (props) => {

    return (
        <div className="row">
            {
                props.lst.map(item => {
                    return <Item key={item.id} Item={item}></Item>
                })
            }
        </div>
    )
};

export default ItemList;