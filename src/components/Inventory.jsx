import React, { useEffect } from 'react'
import Title from './Title'
import SubTitle from './SubTitle';
import Button from './Button';
import ProductsList from './ProductsList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { product } from '../store/atoms/atoms';

export default function Inventory({ className }) {

  // const products = [{
  //   title: "cotton t-shirt for men",
  //   productType: "T-shirt",
  //   price: 1200,
  // }, {
  //   title: "synthetic t-shirt for men",
  //   productType: "T-shirt",
  //   price: 900,
  // }, {
  //   title: "nylon shirt for men",
  //   productType: "Shirt",
  //   price: 1000,
  // }, {
  //   title: "Pure original wollen sweater for men",
  //   productType: "Sweater",
  //   price: 2000,
  // }];

  const [products, setProducts] = useRecoilState(product);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BACKEND_URL+'/api/v1/seller/auth/products', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then((res) => {
      // console.log(res);
      setProducts(res.data.products);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const navigate = useNavigate();
  
  return (
    <div className={` w-full min-h-screen text-card-foreground p-4 flex flex-col justify-start items-start ${className}`}>
      
      <Title title="Inventory" className=" px-2 pt-2" />

      {products.length===0?
      <div className={` w-full h-[90%] my-4 p-4 py-10 min-h-96 rounded-md border-2 border-dotted border-border flex flex-col justify-center items-center gap-3`}>

        <Title title="You have no products" />
        <SubTitle subtitle="You can start selling as soon as you add a product." />
        <Button content="Add Product" className=" text-primary-foreground bg-primary px-4 m-1" />

      </div>:
      <div className={` w-full my-4 bg-card`}>

        <div className={` w-full h-[90%] p-4 py-10 rounded-md border-2 border-dotted border-border flex flex-col justify-center items-center gap-3`}>
          <Title title="Add new product" />
          <Button content="Add Product" className=" text-primary-foreground bg-primary px-4 m-1" onClick={() => {
            navigate('/seller/add-product');
          }}/>
        </div>
        <ProductsList products={products} />

      </div>}
      

    </div>
  )
}
