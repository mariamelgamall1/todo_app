import React 
from 'react';
import FinishedList from "../FinishedList";
import {Flex} from "antd";
function FinishedApp({Flist,setFList,deleteItem}){

    return(
        <>
 
         <Flex align="center" vertical>
        <h1>Finished Items</h1>
        </Flex>
        <FinishedList tasks={Flist} setFList={setFList} deleteItem={deleteItem}/>
  
        </>
    );
}


export default FinishedApp;