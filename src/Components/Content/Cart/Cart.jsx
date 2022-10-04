import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Utils/Context";
import ItemCount from "../Utils/ItemCount";
import { Alert } from "../Utils/SweetAlert";

const Cart = () => {
    const navigate = useNavigate()
    const { cart, removeItem, cartTotal, clear, TotalProductos, addItem } = useContext(CartContext);
    const total = cartTotal();
    const TotalItemsCart = TotalProductos();
    const tmr = setTimeout(() => {
        if (TotalItemsCart === 0) {
            Alert('warning','Carrito','No hay Productos.').then(r=>{
                if(r.isConfirmed)  navigate('/');
            });
        }
        clearTimeout(tmr);
    }, 1000);

    const onUpdateCount = (item, quantityToAdd) => {

        addItem(item, quantityToAdd);
    }


    return (
        <div className="row">
            <div className="col-md-9 col-lg-9">
                <div className="card">
                    <div className="card-header bg-info">
                        <h5 className="m-b-0 text-white">Tienes {TotalItemsCart} Producto(s) en el Carro</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table product-overview">
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>Imagen</th>
                                        <th style={{ textAlign: 'center' }}>Producto</th>
                                        <th style={{ textAlign: 'center' }}>Precio Unidad</th>
                                        <th style={{ textAlign: 'center' }}>Cantidad</th>
                                        <th style={{ textAlign: 'center' }}>Total</th>
                                        <th style={{ textAlign: 'center' }}>Accion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(i => {
                                            return <tr key={i.id}>
                                                <td width="100"><img src={i.image} alt="iMac" width="80" /></td>
                                                <td width="250">
                                                    <h5 className="font-500">{i.nombre}</h5>
                                                    <p>{i.Descripcion}</p>
                                                </td>
                                                <td width="120" align="center" >S/. {i.precio}</td>
                                                <td><ItemCount item={i} initial={i.cantidad} onUpdateCount={onUpdateCount} IsItemDetail={false}></ItemCount></td>
                                                <td width="100" align="center" className="font-500">S/. {i.subtotal}</td>
                                                <td align="center"><a href="!#" onClick={(e) => { e.preventDefault(); removeItem(i.id); }} className="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i className="ti-trash text-dark"></i></a></td>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                            <hr />
                            <div className="d-flex no-block align-items-center">
                                <Link to={'/'} className="btn btn-dark btn-outline"><i className="fas fa-arrow-left"></i> Continuar Comprando</Link>
                                <div className="ml-auto">
                                    <button onClick={clear} className="btn btn-secondary btn-outline">Eliminar Todos</button>
                                    <Link to={'/checkout'} style={{ marginLeft: '15px' }} className="btn btn-danger"><i className="fa fa fa-shopping-cart"></i> Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-3 col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Resumen de Compra</h5>
                        <hr />
                        <small>Total a Pagar</small>
                        <h2>S/. {total}</h2>
                        <hr />
                        <Link to={'/checkout'} className="btn btn-success">Checkout</Link>
                        <button onClick={clear} style={{ marginLeft: '15px' }} className="btn btn-secondary btn-outline">Cancelar Compra</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Soporte</h5>
                        <hr />
                        <h4><i className="ti-mobile"></i> 970538568 (Toll Free)</h4> <small>Póngase en contacto con nosotros si tiene alguna pregunta. </small>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;