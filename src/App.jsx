import { generate} from "random-words";

function App() {
  // This function will be called upon button click on our website 
  const openTab = () =>{
      let bing;
      let text = generate();
      bing = window.open("https://www.bing.com/search?q=" + text, "_blank");
      setTimeout(()=>{
         bing.close();
       },3500);
  }
 
  const stopSearch = ()=>{
    openTab();
    let s = setInterval(()=>{
      // console.log("first")
       openTab()
  },5000
  )
  setTimeout(()=>{
    // console.log("second")
    clearInterval(s);
  },20000)
  }

  return (
    <div className="wrapper flex flex-col">
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold text-orange-900">
          We will make our app here.
          </h1>
      </div>
      <div className="mx-auto w-fit">
        <button className="bg-yellow-500 py-3 px-8 rounded-lg" onClick={stopSearch}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
