import React from 'react';
import { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { AiOutlinePlus   } from "react-icons/ai";

const AddTodo=({addItem})=>{
    const[text,setText]=useState('');
    const handleChange=(event)=>{
       setText(event.target.value)
    };
    const handleClick=()=>{
        if (text.trim()) {
            addItem(text);
            setText('');  
        }
};

    return(
        <>
        <Space.Compact
      style={{
        width: '35%',
      }}
    >
      <Input value={text} onChange={handleChange}/>
      <Button type="primary" onClick={handleClick} icon={<AiOutlinePlus/>}></Button>
    </Space.Compact>
        
        </>
    );
   
};

export default AddTodo;