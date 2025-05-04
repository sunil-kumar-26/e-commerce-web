import { useEffect, useRef, useState ,useLayoutEffect} from 'react'
import axios from 'axios';
import { Footer } from './components/Footer.jsx';
import { MdDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import Header from './components/Header.jsx';
import { FaStarHalfAlt } from "react-icons/fa";
import './Skeleton.css';
const API='https://newsapi.org/v2/everything?q=Apple&from=2025-05-02&sortBy=popularity&apiKey=API_KEY'
const API_KEY='0d6178a5bd0147388714f77a7a1805ca';
/* note: if you want to search anything just pass the keyword related to that query in above given api .example everything?q=Apple/gogle/modi/china 
  you can also use  date to find the news /&from=2025-04-23  , can also use  /&sortBy=popularity
*/
const API2='https://dummyjson.com/products?limit=4&'
// you can also provide the skip parameter here for skipping the items
//   https://dummyjson.com/products?limit=10&skip=11&select=key=1


function App() {
  //...................................................
  const[Data,setData]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[dataPerPage,setDataPerPage]=useState(10);
  let indexOfLastItem=currentPage*dataPerPage ;  // 1*10
  let indexOfFirstItem=indexOfLastItem-dataPerPage;// 10-10
  let current_data_per_page=Data.products?.slice(indexOfFirstItem,indexOfLastItem); // will give array of 10 items only. 
  let totalPage=Math.ceil(Data.limit/dataPerPage);  // total pages for whole data
 console.log(current_data_per_page)
   async function fetch_api(){
    try{
    let response=await axios.get(`https://dummyjson.com/products?limit=${0}`);

    setData(response?.data||[])
    console.log('response.data:',response.data,'😀')    }
    catch(error){
   console.log("sunil your whole error log is here:",error);
    }
   }
   

   useEffect(()=>{
    fetch_api();    
 },[]);
 
 if(Data.length==0){
  return <>
  <div className='max-w-[1440px]'>
    <Header/>
   <div className="skeleton-wrapper">
      <div className="skeleton skeleton-header"></div>
      <div className="skeleton skeleton-block"></div>
      <div className="skeleton skeleton-block"></div>
      <div className="skeleton skeleton-block"></div>
    </div>
    <Footer/>
    </div>
   </> 
 }
 
const previous_fun=()=>{
  // console.log('pre',currentPage-1);
  setCurrentPage((pre)=>(pre!==1)?pre-1:pre)
}

const next_fun=()=>{
  setCurrentPage((pre)=>(pre!==totalPage)?pre+1:pre)
}

const direct_click_fun=(index)=>{
  setData(Data);
  setCurrentPage(index+1);
}

const parent=window.document.getElementById('parent')
console.dir(parent)
//....................................................
  return (
    <>
        <div className='max-w-[1440px] h-dvh mx-auto ' id='parent'>
   
       <Header/>
      
      <div className=' bg-[#E3E6E6] max-w-dvw border-[0px]  h-auto p-[10px] py-[20px] my-[0px] grid grid-cols-2 gap-[20px] sm:grid-cols-3 mx-auto '>
        
      {current_data_per_page?.map((products,index)=>{
                     return(
                       <div key={index}>
            
                           <div className=" w-[180px] sm:w-[440px]  h-auto p-[4px] bg-blue-100 border-[0px]  mx-auto cursor-pointer" id='card '>
                            
                            <img src={products.thumbnail} alt={products.category}  
                             className=' border-b-[0px] border-[0px] rounded-[3px] border-[black] bg-white w-[200px] sm:w-dvw my-[10px] 
                              mt-[0px] h-auto  hover:border-b-[1px]'/>
                            <h4 className='hover:underline text-green-700 hover:text-green-800 font-[800] sm:font-[700] text-[11px] sm:text-[18px]
                              mt-[-8px] sm:my-[-4px] border-0 sm:border-0 '>
                              {products.title}</h4>
                             <div className='flex '>
                              <FaStar className='text-orange-400  text-[12px] sm:text-[16px]'/>
                              <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
                              <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
                              <FaStar className='text-orange-400 text-[12px] sm:text-[16px]'/>
                              <FaStarHalfAlt className='text-orange-400 text-[12px] sm:text-[16px]'/>
                              <p className='pl-[5px] mt-[0px] text-[10px] sm:text-[14px]'>{products.rating}</p>
                               </div>   
                              <h6 className='text-[11px] sm:text-[17px]  font-[500] sm:font-[600] pl-[0px] sm:pl-[5px] '>From ${products.price}</h6>
                             {/* <h5 className='border-[2px] font-medium'>{products.description}</h5>  */}
                             <div className='flex flex-row'>
                             <MdDiscount className='text-[12px] sm:text-[20px] hover:text-red-500'/>
                             <h5 className='text-[10px] sm:text-[14px]  font-[400] sm:font-[500]   pl-[0px] sm:pl-[5px] line-through'>
                             M.R.P: ${products.discountPercentage}</h5>
                             </div>
                             <div className='flex gap-[4px]'>
                              <p className='text-[10px] sm:text-[14px]  font-[300] sm:font-[400]    sm:pl-[5px] '>Get it by</p> 
                              <p className=' text-[10px] sm:text-[14px]  font-[400] sm:font-[500]   sm:pl-[5px] '>{ products.shippingInformation }</p>
                              </div>
                           </div>
                         
                       </div>
                     )
                    })}
    </div>
      
      <div className='bg-[#FFFFFF] text-center justify-center ' id='buttonList'>
   <button  className={`${(currentPage!==1)?'bg-purple-400 border-[1px] active:bg-red-400':'bg-gray-300 border-[0px]'}  rounded-[2px] m-[2px] w-[50px] sm:min-w-[80px] font-[400] sm:font-[500] active:border-[0px] `} onClick={()=>previous_fun()}>pre</button>
  {Array.from({length:totalPage},(item,index)=>{
    return <button  className={` font-[400] sm:font-[500] border-[1px] m-[2px] min-w-[50px] sm:min-w-[70px] active:border-[0px] rounded-[2px] ${(currentPage==index+1)?'bg-red-400':'bg-purple-400'}`} key={index} 
                                onClick={()=>{direct_click_fun(index)}}>{1+index}</button>
  })}
   <button  className={`${(currentPage!==totalPage)?'bg-purple-400 border-[1px] active:bg-red-400':'bg-gray-300 border-[0px]'}  rounded-[2px] m-[2px] min-w-[50px] font-[400] sm:font-[500] sm:min-w-[80px] active:border-[0px]`}  onClick={()=>next_fun()}>Next</button>
      </div>

    <Footer/>
    </div>
   
    </>
  )
}

export default App

//....................................................................................................................................................................






