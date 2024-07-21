import React from "react";
import TodoItem from "../TodoItem";
function TodoList({tasks,setList,deleteItem}){

    const finishItem = (id) => {
        const updatedTasks=
         tasks.map((task) =>task.id === id ? { ...task, isComplete: true } : task
         
    );
 
    setList(updatedTasks);
    
}
        
    
 return(
    <ul>
       
    {tasks?.filter((task)=>!task.isComplete).map(item=>(<TodoItem key={item.id} item={item} deleteItem={deleteItem} finishItem={finishItem}/>))}
    </ul>
  
 );
}
export default TodoList;