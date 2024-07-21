import TodoApp from './components/TodoApp'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Layout} from "antd";
import FinishedApp from './components/FinishedApp';
import AppMenu from './components/Menu';
import React, { useState } from 'react';
const { Sider, Content } = Layout;
function App() {


  const[list,setList]=useState([]);
  const deleteItem=(id)=>{
    setList(list.filter(list=> list.id !==id))
}
  return (
    <Router>
    <Layout>
    <Sider>
    <AppMenu/>
    </Sider>
      <Layout>
         <Content >
           <Routes>
            <Route path="/" element={<TodoApp list={list} setList={setList} deleteItem={deleteItem}/>}/>
            <Route path="/done" element={<FinishedApp Flist={list} setFList={setList} deleteItem={deleteItem}/>}/>
          </Routes>     
         </Content>
       </Layout>
    </Layout>
    </Router>
  );
}

export default App;
