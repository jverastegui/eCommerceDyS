import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Utils/Context";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Alert } from "../Utils/SweetAlert";
const Checkout = () => {

    const navigate = useNavigate()
    const { cart, cartTotal, TotalProductos, clear } = useContext(CartContext);
    const total = cartTotal();
    const TotalItemsCart = TotalProductos();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    let [orderId, setOrderId] = useState("");

    const sendOrder = () => {

        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            //Creo el objeto con los Datos del Comprador
            const buyer = { name: nombre, email: email, phone: telefono };
            //Creo el array de productos
            const items = [];
            cart.forEach(item => { //Recorro el array del Carrito y voy agregando los productos, en el array de productos que voy a subir al Firestore
                items.push({ id: item.id, title: item.nombre, price: item.precio, quantity: item.cantidad });
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            //Creo el objeto con todos los datos de la Compra
            const order = { buyer: buyer, items: items, date: now, total: total };

            //Creo que la conexión al Firestore, para cargar la Orden de Compra
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then(({ id }) => {
                orderId = id;
                setOrderId(orderId);
                Alert('success', 'Orden de Compra', 'Se genero la Orden con Id: ' + id).then(x => {
                    if (x.isConfirmed) {
                        navigate('/');
                        clear();
                    }
                })

            });
        }
    }

    const validate=(e, elem) => {
        elem=document.getElementById('frmOrder');
        if (elem[0].checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        elem.classList.add('was-validated');
        sendOrder();
      }



    return (
        <div className="row">
            <div className="col-md-8 col-lg-8">
                <div className="card">
                    <div className="card-body">
                        <div className="row">

                            <div className="col-md-12">
                                <h5 className="card-title">Datos Generales</h5>
                                <hr />
                                <form  id="frmOrder" className="needs-validation">
                                    <div className="form-group input-group m-t-40 has-validation">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" required onInput={(e) => setNombre(e.target.value)} placeholder="Nombre Completo" aria-label="Nombre Completo" />
                                        <div className="invalid-feedback">
                                            Ingrese el Nombre Completo.
                                        </div>
                                    </div>
                                    <div className="form-group input-group m-t-40 has-validation">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-address-card"></i></span>
                                        </div>
                                        <input type="email" required className="form-control" onInput={(e) => setEmail(e.target.value)} placeholder="Ingrese Correo Electronico" aria-label="Ingrese Correo Electronico" />
                                        <div className="invalid-feedback">
                                            Ingrese un email valido.
                                        </div>
                                    </div>
                                    <div className="form-group input-group m-t-40 has-validation">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                        </div>
                                        <input type="number" required className="form-control" onInput={(e) => setTelefono(e.target.value)} placeholder="Telefono" aria-label="Telefono" />
                                        <div className="invalid-feedback">
                                            Ingrese el Telefono.
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-info" onClick={(e,ele) => { validate(e,ele) }}>Generar Orden</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="col-md-4 col-lg-4">
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
                                        <th style={{ textAlign: 'center' }}>Total</th>
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

                                                <td width="100" align="center" className="font-500">S/. {i.subtotal}</td>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                            <hr />
                            <div className="d-flex no-block align-items-center">

                                <h5>Total a Pagar</h5>


                                <div className="ml-auto">
                                    <h2>S/. {total}</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Checkout;