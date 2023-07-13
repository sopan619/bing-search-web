import {generate} from "random-words";

function App() {
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
      <div className="text-center my-5">
        <h1 className="text-3xl font-mono font-bold text-cyan-900">
          Earn Microsoft Reward Points Automatically.
          </h1>
      </div>
      <div className="mx-auto my-7 flex flex-col gap-3">
        <label htmlFor="myInp" className="text-cyan-900 text-md font-serif">How many Searches you want to perform?</label>
        <input type="number" id="myInp" className="w-72 py-2 rounded-lg bg-cyan-200 outline-2 outline outline-offset-2 text-center text-cyan-900 text-lg font-bold"/>
        <div className="">
        <button className="bg-cyan-800 hover:bg-emerald-700 py-2 rounded-lg text-lg text-sky-200 w-72" onClick={stopSearch}>Click Me</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
