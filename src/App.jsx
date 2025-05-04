// import { useEffect, useRef, useState ,useLayoutEffect} from 'react'
// import axios from 'axios';
// import { Footer } from './components/Footer.jsx';
// import { MdDiscount } from "react-icons/md";
// import { FaStar } from "react-icons/fa6";
// import Header from './components/Header.jsx';
// import { FaStarHalfAlt } from "react-icons/fa";
// const API='https://newsapi.org/v2/everything?q=Apple&from=2025-05-02&sortBy=popularity&apiKey=API_KEY'
// const API_KEY='0d6178a5bd0147388714f77a7a1805ca';
// /* note: if you want to search anything just pass the keyword related to that query in above given api .example everything?q=Apple/gogle/modi/china 
//   you can also use  date to find the news /&from=2025-04-23  , can also use  /&sortBy=popularity
// */
// const API2='https://dummyjson.com/products?limit=4&'
// // you can also provide the skip parameter here for skipping the items
// //   https://dummyjson.com/products?limit=10&skip=11&select=key=1


// function App() {
//   //...................................................
//   const [count, setCount] = useState(false);
//   const [limit,setLimit]=useState(10);
//   const[data,setdata]=useState([])
//    async function fetch_api(limit){
//     try{
//     let response=await axios.get(`https://dummyjson.com/products?limit=${limit}`);
//     setdata(response.data.products||[])
//     console.log('response.data:',response.data,'😀')
//     console.log('response.data.products:',response.data.products,'😀')
//     }
//     catch(error){
//    console.log("sunil your whole error log is here:",error);
//     }
//    }
   

//    useEffect(()=>{
//     fetch_api((limit=='')?10:limit);    
//  },[limit]);
 
//  if(data.length==0){
//   return <>loading</>
//  }
 
// //....................................................
//   return (
//     <>
//     <div className='max-w-[1440px] h-dvh mx-auto '>
   
//       <div className='max-w-[1440px] mx-auto bg-amber-100'>
//        <div className='border-[4px] border-[black] max-w-[800px] rounded-2xl bg-purple-200  h-[100px] flex justify-center items-center mx-auto'>
//         <label htmlFor="" className=' font-extrabold  m-[5px] h-[50px] w-[190px] pl-[5px]'>enter limit of products</label>
//         <input type="text" className='border-[2px] border-[purple] m-[5px] h-[50px] max-w-[500px]' placeholder='pleae enter the number for limit' 
//          value={limit} onChange={(event)=>{setLimit(event.target.value)}}/>
//        </div>
//        <div>
//         you value is: {limit}
//        </div>
//        </div>

//        <Header/>
      
//       <div className=' bg-[#E3E6E6] max-w-dvw border-[0px]  h-auto p-[10px] py-[20px] my-[0px] grid grid-cols-2 gap-[20px] sm:grid-cols-3 mx-auto '>
        
//       {data.map((products,index)=>{
//                      return(
//                        <div key={index}>
            
//                            <div className=" w-[180px] sm:w-[440px]  h-auto p-[4px] bg-blue-100 border-[0px]  mx-auto cursor-pointer" id='card '>
                            
//                             <img src={products.thumbnail} alt={products.category}  
//                              className=' border-b-[0px] border-[0px] rounded-[3px] border-[black] bg-white w-[200px] sm:w-dvw my-[10px] 
//                               mt-[0px] h-auto  hover:border-b-[1px]'/>
//                             <h4 className='hover:underline text-green-700 hover:text-green-800 font-[800] sm:font-[700] text-[11px] sm:text-[18px]
//                               mt-[-8px] sm:my-[-4px] border-0 sm:border-0 '>
//                               {products.title}</h4>
//                              <div className='flex '>
//                               <FaStar className='text-orange-400  text-[12px] sm:text-[16px]'/>
//                               <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
//                               <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
//                               <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
//                               <FaStarHalfAlt className='text-orange-400 text-[12px] sm:text-[16px]'/>
//                               <p className='pl-[5px] mt-[0px] text-[10px] sm:text-[14px]'>{products.rating}</p>
//                                </div>   
//                               <h6 className='text-[11px] sm:text-[17px]  font-[500] sm:font-[600] pl-[0px] sm:pl-[5px] '>From ${products.price}</h6>
//                              {/* <h5 className='border-[2px] font-medium'>{products.description}</h5>  */}
//                              <div className='flex flex-row'>
//                              <MdDiscount className='text-[12px] sm:text-[20px] hover:text-red-500'/>
//                              <h5 className='text-[10px] sm:text-[14px]  font-[400] sm:font-[500]   pl-[0px] sm:pl-[5px] line-through'>
//                              M.R.P: ${products.discountPercentage}</h5>
//                              </div>
//                              <div className='flex gap-[4px]'>
//                               <p className='text-[10px] sm:text-[14px]  font-[300] sm:font-[400]    sm:pl-[5px] '>Get it by</p> 
//                               <p className=' text-[10px] sm:text-[14px]  font-[400] sm:font-[500]   sm:pl-[5px] '>{ products.shippingInformation }</p>
//                               </div>
//                            </div>
                         
//                        </div>
//                      )
//                     })}
//       </div>
  
//   <Footer/>
//     </div>
   
//     </>
//   )
// }

// export default App

//....................................................................................................................................................................

import React from 'react';

const App = () => {
  const totalItem=194;
  const itemsPerPage=10;
  const result=Math.ceil(totalItem/itemsPerPage)  //output 20
  console.log('output should be 20=>',result);

  const dataSet=Array.from({length:result},(item,index)=>{
    console.log('index:',index);
    item=`ran:${index+1}`;
    console.log('items:',item);
    return item;
  })
  console.log(dataSet);


  return (
    <div>
    total: {result } 😎

    {Array.from({length:result})}
    </div>
  )
}

export default App











//......................................................................................................................................................................
/*  <div className='max-w-[1440px] mx-auto bg-[#ECEFd9] h-auto pb-[100px]'>

      <div>
      <div className='bg-gray-900  text-white flex justify-around'>
        <section className='border-[1px]'>home</section>
        <section className='border-[1px]'>about</section>
        <section className='border-[1px]'>contact</section>
      </div>
      </div> 
    
    </div>   */ 


    /*
 availabilityStatus
: 
"In Stock"
brand
: 
"Essence"
category
: 
"beauty"
description
: 
"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
dimensions
: 
{width: 15.14, height: 13.08, depth: 22.99}
discountPercentage
: 
10.48
id
: 
1
images
: 
['https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp']
meta
: 
{createdAt: '2025-04-30T09:41:02.053Z', updatedAt: '2025-04-30T09:41:02.053Z', barcode: '5784719087687', qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'}
minimumOrderQuantity
: 
48
price
: 
9.99
rating
: 
2.56
returnPolicy
: 
"No return policy"
reviews
: 
(3) [{…}, {…}, {…}]
shippingInformation
: 
"Ships in 3-5 business days"
sku
: 
"BEA-ESS-ESS-001"
stock
: 
99
tags
: 
(2) ['beauty', 'mascara']
thumbnail
: 
"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
title
: 
"Essence Mascara Lash Princess"
warrantyInformation
: 
"1 week warranty"
weight
: 
4
 */