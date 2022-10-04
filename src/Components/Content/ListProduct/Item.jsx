import React from "react";
// import Fancybox from "../Utils/Fancybox";
import { Link } from "react-router-dom";

const Item = (obj) => {



    return (
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <Link to={'/item/' + obj.Item.id}><img className="card-img-top img-responsive" src={obj.Item.image} alt="Card" /></Link>

                <div className="card-body">

                    <h3 className="font-normal">{obj.Item.nombre}</h3>
                    <p className="m-b-0 m-t-10">{obj.Item.Descripcion}</p>

                    <div className="row">
                        <div className="col-md-6">
                            <Link to={'/item/' + obj.Item.id} className="btn btn-success btn-rounded waves-effect waves-light m-t-20">Ver mas</Link>
                        </div>
                        <div className="col-md-6" style={{ textAlign: 'right' }}>
                            <div className="ml-auto m-r-15" style={{ marginTop: '5px' }} >
                                <h3 className="m-b-0 m-t-30">S/. {obj.Item.precio}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Item;