import React, { useState } from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import InputBox from './InputBox'
import ToggleButton from './ToggleButton';
import Button from './Button';
import axios from 'axios';
import { loadingStatus } from '../store/atoms/atoms';
import { useRecoilState } from 'recoil';
import InputBoxImage from './InputBoxImage';

export default function AddProduct({ className }) {

  const [loading, setLoading] = useRecoilState(loadingStatus);

  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productInstruction, setProductInstruction] = useState('');
  const [productType, setProductType] = useState('');

  const [freeSize, setFreeSize]  = useState(false);

  const [freeSizeStock, setFreeSizeStock]  = useState(0);
  const [XSStock, setXSStock]  = useState(0);
  const [SStock, setSStock]  = useState(0);
  const [MStock, setMStock]  = useState(0);
  const [LStock, setLStock]  = useState(0);
  const [XLStock, setXLStock]  = useState(0);
  const [XXLStock, setXXLStock]  = useState(0);
  const [imagesUrl, setImagesUrl] = useState([]);

  const [inputImageCnt, setInputImageCnt] = useState(1);

  const sellerAddProductProcess = async () => {
    try {
      setLoading(true);

      // firebase image
      

      const productStock = [];
      if (freeSize){
        productStock.push({
          size: "Free Size",
          stock: freeSizeStock
        });
      } else {
        productStock.push({
          size: "XS",
          stock: XSStock
        }, {
          size: "S",
          stock: SStock
        }, {
          size: "M",
          stock: MStock
        }, {
          size: "L",
          stock: LStock
        }, {
          size: "XL",
          stock: XLStock
        }, {
          size: "XXL",
          stock: XXLStock
        });
      }
      // console.log(productStock);
      const authorization = localStorage.getItem('token');
      // console.log(authorization);
      const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/v1/seller/auth/add-product", {
        title: productTitle,
        description: productDescription,
        instruction: productInstruction,
        productType: productType,
        price: Number(productPrice),
        productStock: productStock
      }, {
        headers: {
          authorization: authorization
        }
      });
      console.log(res);
      setLoading(false);
    } catch (err){
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <div className={` bg-background text-card-foreground flex gap-2 flex-col justify-start items-start p-7 ${className} `}>

      <Title title="Add Product" className=" w-full text-left flex justify-start items-start" />
      <SubTitle subtitle="Fill out the form below to add a new product to your inventory" className=" w-full text-wrap flex justify-start items-start" textClassName=" text-left" />

      <div className=' w-full flex justify-center items-center mt-4'>
        <div className=' w-full bg-card border-2 border-dashed border-accent flex gap-2 flex-col justify-start items-start p-4 py-6 rounded-md'>

          <div className=' w-full px-2 flex flex-col justify-start items-start'>
            <SubTitle subtitle="Product Title" className=" text-xl text-foreground mb-1" />
            <InputBox placeholder="Enter product title" type="text" className=" mt-1" onChange={(e) => {
              setProductTitle(e.target.value)
            }} />
          </div>

          <div className=' w-full px-2 flex flex-col justify-start items-start'>
            <SubTitle subtitle="Product Price" className=" text-xl text-foreground mb-1" />
            <InputBox placeholder="Enter price" type="number" className=" mt-1" onChange={(e) => {
              setProductPrice(e.target.value)
            }} />
          </div>

          <div className=' w-full px-2 flex flex-col justify-start items-start'>
            <SubTitle subtitle="Description" className=" text-xl text-foreground mb-1" />
            <InputBox placeholder="Enter description" type="text" className=" mt-1" onChange={(e) => {
              setProductDescription(e.target.value)
            }} />
          </div>

          <div className=' w-full px-2 flex flex-col justify-start items-start'>
            <SubTitle subtitle="Instruction" className=" text-xl text-foreground mb-1" />
            <InputBox placeholder="Enter instruction" type="text" className=" mt-1" onChange={(e) => {
              setProductInstruction(e.target.value)
            }} />
          </div>

          <div className=' w-full px-2 flex flex-col justify-start items-start'>
            <SubTitle subtitle="Product Type" className=" text-xl text-foreground mb-1" />
            <InputBox placeholder="Enter product type" type="text" className=" mt-1" onChange={(e) => {
              const inputOfProductType = String(e.target.value);
              setProductType(inputOfProductType.toUpperCase());
            }} />
          </div>

          <div className=' w-full h-10 px-2 flex gap-4 justify-start items-center'>
            <SubTitle subtitle="Free Size" className=" text-xl text-foreground " />
            <ToggleButton status={freeSize} onClick={() => {
              setFreeSize(status => !status);
            }} />
          </div>

          {freeSize===true?
          <div className=' w-full p-4 flex gap-2 flex-col justify-start items-start border border-accent rounded-md '>

            <div className=' w-full flex justify-between mb-2'>
              <SubTitle subtitle="Size" className=" w-[30%] text-xl text-foreground" />
              <SubTitle subtitle="Stock" className=" w-[45%] text-xl text-foreground" />
            </div>

            <div className=' w-full flex justify-between'>
              <InputBox placeholder="Free Size" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setFreeSizeStock(Number(e.target.value));
              }} />
            </div>

          </div>:
          <div className=' w-full p-4 flex gap-2 flex-col justify-start items-start border border-accent rounded-md '>

            <div className=' w-full flex justify-between mb-2'>
              <SubTitle subtitle="Size" className=" w-[30%] text-xl text-foreground" />
              <SubTitle subtitle="Stock" className=" w-[45%] text-xl text-foreground" />
            </div>

            <div className=' w-full flex justify-between'>
              <InputBox placeholder="XS" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setXSStock(Number(e.target.value));
              }} />
            </div>
            <div className=' w-full flex justify-between'>
              <InputBox placeholder="S" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setSStock(Number(e.target.value));
              }} />
            </div>
            <div className=' w-full flex justify-between'>
              <InputBox placeholder="M" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setMStock(Number(e.target.value));
              }} />
            </div>
            <div className=' w-full flex justify-between'>
              <InputBox placeholder="L" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setLStock(Number(e.target.value));
              }} />
            </div>
            <div className=' w-full flex justify-between'>
              <InputBox placeholder="XL" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setXLStock(Number(e.target.value));
              }} />
            </div>
            <div className=' w-full flex justify-between'>
              <InputBox placeholder="XXL" type="text" className=" w-[30%] text-center text-xl border-0 placeholder-card-foreground" disabled={true} />
              <InputBox placeholder="" type="number" className=" w-[45%] text-center text-xl" onChange={(e) => {
                setXXLStock(Number(e.target.value));
              }} />
            </div>

          </div>}

          <div className=' w-full px-2 p-1 flex gap-2 flex-col justify-start items-start'>
            <SubTitle subtitle="Product Image" className=" text-xl text-foreground mb-1" />

            {new Array(inputImageCnt).fill('').map((_, index) => <InputBoxImage onUploadSet={setImagesUrl} />)}

            <Button content='+ Add new image' className='bg-primary text-primary-foreground ml-1 h-9 flex justify-center items-center' onClick={() => {
              setInputImageCnt(cnt => cnt+1);
            }} />
          </div>

          <div className=' w-full h-12 flex justify-end items-center'>
            <Button className=" bg-primary px-4 text-primary-foreground" content="Add to inventory" onClick={sellerAddProductProcess} />
          </div>

        </div>
      </div>

    </div>
  )
}
