import React from "react";
import { Link } from "react-router-dom";

const ItemCount = (props) => {
    let [counts, setCount] = React.useState(props.initial);
    function Counter(type) {
       
        if (type && counts < props.item.stock) {
            counts=counts + 1;
            setCount(counts);
        } else if (!type && counts >1)  {
            counts=counts - 1;
            setCount(counts);
        }
    }

    const ItemContadorDetalleCompra = () => {
        return (

            <div className="input-group">
                <button className="btn btn-outline-secondary" onClick={() => { Counter(true); props.onUpdateCount(props.item,counts); }} type="button" id="btnIncrementar">+</button>
                <input type="number" style={{ textAlign: 'center' }} max={props.item.stock} readOnly={true} min={props.initial} className="form-control" value={counts} />
                <button className="btn btn-outline-secondary" onClick={() => { Counter(false); props.onUpdateCount(props.item,counts); }} type="button" id="btnDecrementar">-</button>
            </div>

        )

    }

    const ItemDetalleCount = () => {
        return (
            <>

                <div className="input-group">
                    <button className="btn btn-outline-secondary" onClick={() => { Counter(true) }} type="button" id="btnIncrementar">+</button>
                    <input type="number" style={{ textAlign: 'center' }} max={props.item.stock} readOnly={true} min={props.initial} className="form-control" value={counts} />
                    <button className="btn btn-outline-secondary" onClick={() => { Counter(false) }} type="button" id="btnDecrementar">-</button>
                </div>
                <div className="d-grid gap-2 pt-1" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button disabled={props.item.stock <= 0} onClick={() => { props.onAdd(counts); }} className="btn btn-dark btn-rounded m-r-5" data-toggle="tooltip" title="" data-original-title="Agregar al Carro">
                        <i className="ti-shopping-cart"></i>
                    </button>
                    <Link to={'/cart'} style={{ marginLeft: '7px' }} className="btn btn-primary btn-rounded">Comprar</Link>
                </div>

            </>

        )

    }



    return (
        <>
            {props.IsItemDetail === true ? <ItemDetalleCount></ItemDetalleCount> : <ItemContadorDetalleCompra></ItemContadorDetalleCompra>}
        </>

    )
}

export default ItemCount;