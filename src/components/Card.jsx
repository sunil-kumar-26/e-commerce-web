import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Footer } from './Footer';

export const  Card= () => {
    const [data,setData]=useState([]);
    const uselocation=useLocation();
    const current_id=uselocation.pathname.split('/')[2];
    // console.log('this is that',uselocation.pathname.split('/')[2])
    const fetch_api=()=>{
          axios.get(`https://dummyjson.com/products?limit=${0}`).then((response)=>{
            setData(response?.data?.products||[]);
          }).catch((err)=>{
            console.log('error::',err.message)
          })
          
    };
   useEffect(()=>{fetch_api()},[]);

   const api_array=data?.filter((value)=>{
    return value.id==current_id
    })[0]

    console.log('api_array:',api_array);    

  return (
    <> 
      <div className='max-w-[1440px] h-dvh mx-auto text-center bg-[#FFF] '>
        <Header/>
        <div className=" flex flex-wrap items-start  sm:w-[1440px] h-dvh  border-[0px] gap-[10px] sm:pt-[30px]">
            {
            <>
            <div className='flex gap-[10px] flex-wrap sm:flex-nowrap  p-[2px]'>
             <img src={api_array?.images} alt={api_array?.category} className='  bg-white  w-dvw sm:w-[320px] border-[0px]'/>
            
               <div className=' w-dvw '>
                <h1 className='border-b-[1px] border-gray-400  bg-white  text-[14px] sm:text-[22px] font-[500] pr-[0px] text-start'>
                {api_array?.description}
                </h1>
               <p className='text-[14px] font-[500] active:underline border-b-[1px] border-gray-400 text-blue-600 hover:underline bg-white cursor-pointer text-start mt-[10px]  mb-[10px] sm:text-[16px] '>
                Visit The Near DEVbros. Store
               </p>

               <div className='w-dvhw flex flex-wrap gap-[10px] bg-white ' id='star-divide'>
               <ul className='flex gap-[0px] w-[400px] sm:w-[200px]  flex-wrap sm:justify-start items-center text-blue-600 border-[0px] border-r-[1px]'>
               <p className='pl-[0px] mr-[4px] text-[14px] sm:text-[16px] hover:underline hover:text-blue-800 cursor-pointer font-[500]'>{api_array?.rating}</p>
               <FaStar className='text-orange-400  text-[12px] sm:text-[16px]'/>
               <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
               <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
               <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
               <FaStarHalfAlt className='text-orange-400 text-[12px] sm:text-[16px]'/>
               </ul>
               <p className='font-[500] text-start capitalize active:underline text-blue-600 w-[100px] text-[14px] sm:text-[16px] sm:w-[200px] border-[0px] hover:underline  border-r-[1px] hover:text-blue-800 cursor-pointer'>{api_array?.rating} Ratings </p>
               <p className='font-[500] text-start active:underline text-blue-600 border-[0px] w-[100px] sm:w-[200px] text-[14px] sm:text-[16px] border-[black] hover:underline hover:text-blue-800 cursor-pointer' >know more</p>
               </div>

               </div>
             
             </div>
            </>
            }
        </div>
        <Footer/>
      </div>
    </>
   
  )
}

