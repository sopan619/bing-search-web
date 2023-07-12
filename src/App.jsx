
function App() {
  // This function will be called upon button click on our website 
  const openTab = () =>{
    // Opens a new tab and performs the search 
    let bing;
    bing = window.open("https://www.bing.com/search?q=g", "_blank");
    // console.log("Hello")
    // Closes the opened window after 3 seconds
     setTimeout(()=>{
      //  console.log("3 seconds later")
       bing.close();
     },3000);

  }
  return (
    
    <div className="wrapper mb-20 flex flex-col">

      <div className="text-center my-5">
        <h1 className="text-3xl font-bold text-orange-900">
          We will make our app here.
          </h1>
      </div>
      <div className="mx-auto">
        <button className="bg-yellow-500 w-fit py-2 px-3 rounded-lg te" onClick={openTab}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
