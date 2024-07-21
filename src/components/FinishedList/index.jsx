import React from "react";
import TodoItem from "../TodoItem";

function FinishedList({tasks,setList,deleteItem}){

 return(
    <ul>
       
    {tasks?.filter((task)=>task.isComplete).map(item=>(<TodoItem key={item.id} item={item} deleteItem={deleteItem}/>))}
    </ul>
  
 );
}
export default FinishedList;
