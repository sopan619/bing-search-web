import React from 'react'
import {generate} from "random-words";
import image from '../pic1.png'


const ourBody = () => {
    // This function will be called upon button click on our website
  let value = 0 
  let searchCount = 0 
  const openTab = () =>{
      let bing;
      let text = generate();
      bing = window.open("https://www.bing.com/search?q=" + text, "_blank");
      setTimeout(()=>{
         bing.close();
       },4000);
  }
 
  const stopSearch = ()=>{
    value = document.getElementById("myInp").value
    searchCount = (value -1) * 5000
    // console.log(value)
    openTab();
    let s = setInterval(()=>{
       openTab()
  },5000
  )
  setTimeout(()=>{
    clearInterval(s);
  },searchCount)
  }

  return (
    <div className="wrapper flex flex-col">
      <div className="text-center my-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-josefin text-stone-700">
          Earn Microsoft Reward Points Automatically
        </h1>
      </div>
      <div className='image sm:w-[80vw] md:w-[75vw] lg:w-[30vw] mx-auto'>
        <img src={image} alt="man adding money to wallet" className='rounded-xl' />
      </div>
      <div className="mx-auto items-center flex flex-col gap-5">
        <label htmlFor="myInp" className="text-[#141413] text-xl md:text-2xl lg:text-3xl font-fasthand">How many Searches you want to perform?</label>
        <input type="number" id="myInp" className="w-72 py-2 rounded-lg bg-[#f59a51]/60 outline-2 outline outline-offset-2 text-center text-slate-900 text-lg font-josefin font-bold"/>
        
        <p className='text-[#141413]/60 font-josefin text-sm w-3/4 text-center'>Note: In Mobile, all you need is 20 searches to earn maximum points.</p>
        <div>
          
        <button className="bg-[#446bd0] hover:bg-[#446bd0]/50 py-2 rounded-lg text-lg text-stone-900 font-josefin font-bold w-60" onClick={stopSearch}>Search</button>
      </div>
      <footer className='mt-20'>
        <p className='text-xs opacity-50'>Image by redgreystock on Freepik</p>
      </footer>
      </div>
      
    </div>
  )
}

export default ourBody