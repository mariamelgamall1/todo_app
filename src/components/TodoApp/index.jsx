import AddTodo from "../AddTodo";
import TodoList from "../TodoList";
import {Flex} from "antd";
function TodoApp({list,setList,deleteItem}){
    
    const addItem=(newItem)=>{
        setList([...list,{ id:list.length+1, text:newItem,isComplete:false}]);
    }
    
    return(
        <>

         <Flex align="center" vertical>
        <h1>TO DO LIST</h1>
        <AddTodo addItem={addItem}/>
        </Flex>
        <TodoList tasks={list} setList={setList} deleteItem={deleteItem}/>
    
        </>
    );
}


export default TodoApp;