import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SelectedProduct } from '../redux/actions/productActions';
export default function ProductDetail() {
    const productId = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const fetchProductDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
        .catch((err) => {
            console.log(err)
        });
    dispatch(SelectedProduct(res.data))
    }

    useEffect(() => {
            fetchProductDetail();
    },[productId])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>... loading</div>
            ) : 
            (
                <div>
                  
                    <p>{product.category}</p>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            )
            }
        </div>
    )
}