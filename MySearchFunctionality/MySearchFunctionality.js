import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSistrix} from "react-icons/fa"

const MySearchFunctionality = () => {


const [data,setData] = useState([])
const [input,setInput] = useState("")

    const  fetchData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setData(res.data))
        // .then(res=>console.log(res.data))

    }

    useEffect(fetchData)

  //  const handleSearch =(e) =>{
  //      setInput(e.target.value)
  //  }



  return (
    <div >MySearchFunctionality
<div className="d-flex justify-content-center"><input type="text" onChange={(e)=>{setInput(e.target.value)}} placeholder='Search...'></input>
<button> <FaSistrix />  </button>
<br /></div>

<div align="center">{data.filter((item)=>{
  if(input==""){
    return item
  } else if(item.username.toLowerCase().includes(input.toLowerCase())){
    return item
  }
}).map((item,id)=>{
  return   <p key={id}>{item.username}</p>
})}</div>


    </div>
  )
}

export default MySearchFunctionality