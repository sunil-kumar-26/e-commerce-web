import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
  <>
  <div className="max-w-[1470px] h-dvh mx-auto  text-center">
    <Header/>
     <div className='flex items-center justify-center bg-[url(https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?t=st=1746421951~exp=1746425551~hmac=3e16dffb80f1cef139d8a592012786f35a8ea594c298834630cae61e349d2cb1&w=996)] h-dvh bg-cover bg-no-repeat bg-center ' id='home'>
    <div style={{opacity:'0.4'}} className='flex items-center justify-center  bg-white  bg-opacity-[0.5] sm:w-[400px] border-purple-600 border-[5px] hover:bg-purple-100 rounded-[5px] sm:h-[200px] ' id='home' >
      <p   className='text-[25px] font-[700] text-black capitalize hover:text-[27px]   cursor-pointer'>Home route is under process </p>
    </div>
     </div>
  </div>
  </>
  )
}

export default App;

//....................................................................................................................................................................






