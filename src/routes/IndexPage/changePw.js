import React from 'react';
import { Form, Input, Button} from 'antd';
const FormItem = Form.Item;

class ChangePw extends React.Component{
    // 确定修改密码
   changePw(){

   }
   render(){
       const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      };
       return(
           <div>
            <Form>
            <FormItem 
            {...formItemLayout} 
            label="旧密码">
               <Input />
            </FormItem>
            <FormItem
             {...formItemLayout}  
             label="新密码">
               <Input />
            </FormItem>
            <FormItem style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit" onClick='changePw'>确定</Button>
            </FormItem>
          </Form>
           </div>
       )
   }
}

export default ChangePw;