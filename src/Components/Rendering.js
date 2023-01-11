import React,{useState}from 'react'

 const Rendering = () => {
    const[isLoggedIn,setLoggedin]=useState(true)
  return (
    <div>
        {isLoggedIn?
        <div>
            <h1>hello javascript</h1>
        </div>:
        <div>
            <h1>hello react</h1>
        </div>}
     

    </div>
  )
}
export default Rendering;