import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import TodoApp from './components/TodoApp';
import FinishedApp from './components/FinishedApp';
import AppMenu from './components/Menu';
import App1 from './components/login';
import { AuthProvider } from './components/AuthContext';
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/AuthContext';
const { Sider, Content } = Layout;
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />;
};
function App() {
  const [list, setList] = useState([]);
  const location = useLocation();
  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <Layout>
      {location.pathname !== '/' && ( 
        <Sider>
          <AppMenu />
        </Sider>
      )}
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<App1 />} />
            <Route path="/main" element={<ProtectedRoute element={<TodoApp list={list} setList={setList} deleteItem={deleteItem} />}/>} />
            <Route path="/done" element={<ProtectedRoute element={<FinishedApp Flist={list} setFList={setList} deleteItem={deleteItem} />} />}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

function AppWrapper() {
  return (
<AuthProvider>
    <Router>
      <App />
    </Router>
    </AuthProvider>
  
  );
}

export default AppWrapper;
