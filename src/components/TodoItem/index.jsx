import {textStyle} from './styles'
import { DeleteOutlined  , CheckOutlined} from "@ant-design/icons";
import { Button,Flex} from "antd";

function TodoItem({item,deleteItem,finishItem}){

    return(

    <li>
      <Flex gap="large"> 
       <div>
        <span style={textStyle}>{item.text}</span>
        </div>
        <>
        {!item.isComplete && (
                        <Button type="primary" shape="circle" icon={<CheckOutlined />} onClick={() => finishItem(item.id)}></Button>
                    )}
        <Button type="primary" danger  shape="circle" icon={<DeleteOutlined />} onClick={() => deleteItem(item.id)}></Button>
        </>
        
      </Flex> 
    </li>
    );

}

export default TodoItem;