import React from "react";
import { FcBiotech } from "react-icons/fc";
const Footer=({})=>{
    
    return(
        <>
        <div className="max-w-[1440px] h-auto bg-[#232F3E]  py-[0px] pb-[0px]" id="header">
                 
          <div className="max-w-dvw bg-[#485769] text-[white] text-center font-[500] sm:font-[700] border-[0px] flex justify-center gap-[2px] py-[10px] items-center">
            <FcBiotech className="text-[20px]  "/>
            <p className="">DEVbros.</p>
            </div>       
    
          <div>
            <ul className="flex  justify-around flex-wrap text-[#ffe] py-[20px] gap-[10px] cursor-pointer ">
                <div className=" w-[100px] sm:w-[120px] text-center">
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">reach-us</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">contact-us</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">our members</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">location</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">follow us</li>
                </div >
                <div className=" w-[100px] sm:w-[120px] text-center">
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">reach-us</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">contact-us</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">our members</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">location</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">follow us</li>
                </div>
                <div className=" w-[100px] sm:w-[120px] text-center">
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">reach-us</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">contact-us</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">our members</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">location</li>
                <li className="hover:underline capitalize text-[14px] sm:text-[16px] hover:text-[17px]">follow us</li>
                </div>

           </ul>
          </div>
        
        </div>
        </>
    )
}


export {Footer};