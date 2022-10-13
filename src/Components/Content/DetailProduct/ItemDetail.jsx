import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../Utils/Context";
import ItemCount from "../Utils/ItemCount";
import { Toast } from "../Utils/SweetAlert";

const ItemDetail = ({ item }) => {


    const { addItem } = useContext(CartContext);

    const onAdd = (quantityToAdd) => {
        addItem(item, quantityToAdd);
        Toast('success', 'Se agrego el producto correctamente.');
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{item.nombre}</h3>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="white-box text-center"> <img src={item.image} className="img-fluid" alt="Imagen" /> </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h4 className="box-title m-t-40">Descripcion</h4>
                                <p>{item.Descripcion}</p>
                                <h2 className="m-t-40">S/. {item.precio} </h2>
                                <div className="col-md-5" style={{ paddingLeft: '0' }}>
                                    <ItemCount item={item} initial={1} onAdd={onAdd} IsItemDetail={true}></ItemCount>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

};

export default ItemDetail;