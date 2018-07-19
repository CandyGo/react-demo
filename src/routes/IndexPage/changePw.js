import React from 'react';
import { Form, Input} from 'antd';
const FormItem = Form.Item;

class ChangePw extends React.Component{
   render(){
       return(
           <div>
            <Form layout="vertical">
            <FormItem label="旧密码">
               <Input />
            </FormItem>
            <FormItem label="新密码">
               <Input />
            </FormItem>
          </Form>
           </div>
       )
   }
}

export default ChangePw;