import { useState } from "react";

function App() {
  const [num,setNum] = useState(0)
  function incHandler(){
    setNum(num+1)
  }
  function decHandler(){
    setNum(num-1)
  }
  function resetHandler(){
    setNum(0)
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344152] flex-col gap-15 space-y-9">
      <div> <h1 className=" text-[#0398d4] font-medium text-2xl " >Increasing And Decreasing by Manish</h1></div>

      <div className="bg-white flex justify-center gap-12 py-3 text-[25px] rounded-lg" >
        <button onClick={decHandler} className="font-bold text-3xl border-r-2 text-center w-20 "> - </button>

        <div className=' font-bold text-3xl' > {num} </div>

        <button onClick={incHandler} className=" font-bold text-3xl border-l-2 text-center w-20 " > + </button> 
      </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all delay-50 m-10" onClick={resetHandler} >Reset</button>
    </div>
  );
}

export default App;
