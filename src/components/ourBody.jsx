import React from 'react'
import {generate} from "random-words";
import image from '../pic.jpg'
import search from '../search.png'


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
    openTab(); 
    let s = setInterval(()=>{
      openTab()
    },5000
    )
    setTimeout(()=>{
      clearInterval(s);
      document.getElementById("note").innerHTML = "Feels nice right? You have earned all the points, go to your next account now :)";
    },searchCount)
  }

  return (
    <div className="wrapper flex flex-col">
      <div className="text-center my-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-josefin text-[#CBE4DE]">
          Earn Microsoft Reward Points Automatically
        </h1>
      </div>
      <div className='image md:w-[70vw] lg:w-[30vw] mx-auto'>
        <img src={image} alt="man adding money to wallet" className='rounded-xl shadow-sm' />
      </div>
      <div className="mx-auto items-center flex flex-col gap-5">
        <label htmlFor="myInp" className="text-[#CBE4DE] text-xl md:text-2xl lg:text-3xl font-fasthand">How many Searches you want to perform?</label>
        <input type="number" id="myInp" className="w-72 py-2 rounded-lg bg-[#64CCC5]/50 outline-2 outline outline-offset-2 text-center text-slate-800 text-lg font-josefin font-bold" onKeyUp={(e)=>{
          if(e.key ==="Enter"){
            stopSearch()
          }
        }}/>
        
        <p id='note' className='text-[#FFD95A]/60 font-josefin text-sm w-3/4 text-center'>Note: In Mobile, all you need is 20 searches to earn maximum points.</p>
        <div>
          
        <button className="bg-[#0E8388] hover:bg-[#0E8388]/50 py-2 rounded-lg text-lg text-slate-800 font-josefin font-bold w-60 flex items-center" onClick={stopSearch}>
          <p className='ml-[30%] w-fit'>Search</p>
          <span className='ml-[7%] w-fit'>
        <img src={search} alt="search icon" className='w-6' />
        </span>
          </button>
      </div>
      <footer className='sm:mt-20 mt-14 flex flex-col items-center'>
        <p className='text-xs text-[#FFF7D4] opacity-40'>Image by <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6039919">Mohamed Hassan</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6039919">Pixabay</a></p>
        <p className='text-xs text-[#FFF7D4] opacity-40'>Made by</p>
        <p className='text-xs text-[#FFF7D4] opacity-60'>Sopan Roy</p>
        <p className='text-xs opacity-70'>💛</p>
      </footer>
      </div>
      
    </div>
  )
}

export default ourBody