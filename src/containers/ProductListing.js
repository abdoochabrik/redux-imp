import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productActions'
export default function ProductListing() {

    const products = useSelector((state) => state );
    const dispatch = useDispatch();
    const fetchProducts = async () => {
          const res = await axios.
          get("https://fakestoreapi.com/products")
          .catch((err) => {
              console.log(err)
          });

          dispatch( setProducts(res.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
