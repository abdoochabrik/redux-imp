import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SelectedProduct } from '../redux/actions/productActions';
export default function ProductDetail() {
    const productId = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    console.log(product);
    const fetchProductDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err)
        }); 
    dispatch(SelectedProduct(res.data))
    }

    useEffect(() => {
           if(productId && productId != "") fetchProductDetail();
    },[productId])
    return (
        <div>
            <h1>ProductDetail</h1>
        </div>
    )
}