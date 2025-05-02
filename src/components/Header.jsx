import React from "react";
import { FcBiotech } from "react-icons/fc";
function Header(){
    return(
        <>
        <div className="max-w-[1440px] h-auto ">
        <div className=" h-auto mx-auto py-[10px] pb-[0px] bg-[#131921] text-[#fff] flex items-center justify-between flex-wrap sm:flex-wrap border-red-600 border-[0px]"> 
            <div className="flex  my-[10px] sm:border-[0px] sm:mx-[10px] rounded-[1px] sm:p-[10px]  sm:bg-[#] mx-auto  items-center">
            <FcBiotech className="text-[30px] sm:text-[50px] "/>
            <div className="border-[0px] rounded-[2px] font-[500]  p-[0px] ml-[1px] text-[30px] sm:text-[50px]">DEVbros.</div>
            </div>
            <ul className="border-[0px] w-[800px] sm:w-[1080px] border-t-[2px] border-[#232F3E] sm:border-t-[0px] sm:p-[10px] flex justify-around bg-[#] sm:mr-[20px]">
             <li className="border-[0px] sm:p-[10px] capitalize sm:w-[140px] hover:underline sm: cursor-pointer text-[18px] sm:text-[25px] text-center font-bold">home</li>
             <li className="border-[0px] sm:p-[10px] capitalize sm:w-[140px] hover:underline sm: cursor-pointer text-[18px] sm:text-[25px] text-center font-bold">Prodoucts</li>
             <li className="border-[0px] sm:p-[10px] capitalize sm:w-[140px] hover:underline sm: cursor-pointer text-[18px] sm:text-[25px] text-center font-bold">more</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Header;