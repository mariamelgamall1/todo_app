import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

function AppMenu() {
  return (
    <Menu
    theme='dark'
    style={{
      width: 200,
      height:800
    }}>
      <Menu.Item key="1">
        <Link to="/main">TodoApp</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/done">Done</Link>
      </Menu.Item>
    </Menu>
  );
}

export default AppMenu;
