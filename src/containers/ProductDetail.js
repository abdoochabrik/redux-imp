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
        <div>
            <h1>ProductDetail</h1>
        </div>
    )
}