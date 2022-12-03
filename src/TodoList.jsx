import React from 'react'
import {useState} from 'react'
const TodoList = () => {
    const [activity,setActivity]=useState("")
    const [listData,setlistData]=useState([])
    function addActivity(e){
        
        setlistData((listData)=>{
        const updatedList=([...listData,activity])
        console.log(updatedList)
        setActivity("")
        return updatedList
    })
   
    }
    function removeActivity(i){
        const updatedList=listData.filter((elem,id)=>{
        return i!=id;
    })
    setlistData(updatedList)
    }
  return (
      <>
    <div className="container" >
   <div  className="header">TODO LIST</div>
   <input type='text' placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value)} />
   <button onClick={addActivity}>Add</button>
   <p className="List-heading">Check list :)</p>
   {listData!=[]&&listData.map((data,i)=>{
      return(<>
      <p key={i}>
      <div className="listData"> {data}</div>
      <div className="btn-position"><button onClick={()=>removeActivity(i)} >Remove(-)</button></div>
      </p>
      </>
      )
   })}
 
  
    </div>
    </>
  )
}

export default TodoList


