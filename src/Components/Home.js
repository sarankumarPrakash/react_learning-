import React ,{useState}from 'react'


const Home =()=>{
    const [countData,setCountData]=useState(0)

    const handleCLickAdd=()=>setCountData(countData+1)
    const handleCLickMinus=()=>setCountData(countData-1)
    

    return (
        <div>
             <button onClick={handleCLickMinus}> Decrease </button><h1> Count {countData} </h1> <button onClick={handleCLickAdd}> Increase</button>
        </div>
    )
}
export default Home;