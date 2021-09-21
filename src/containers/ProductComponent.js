import React from 'react'
import { useSelector } from 'react-redux';

export default function ProductComponent() {

    const products = useSelector((state) => state.allProducts.products);
    //const {id, title} = products[0];
    const renderList =
        products.map(p => {
        return (
            <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={p.image} alt={p.title} /></div>
                    <div className="content">
                        <div className="header">{p.title}</div>
                        <div className="meta price">$ {p.price}</div>
                        <div className="meta">{p.category}</div>
                    </div>
                </div>
            </div>

        </div>
        )
    })
    return (
        <>
        {renderList}
        </>       
    )
}