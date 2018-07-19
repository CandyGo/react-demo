import React from 'react';
import { Form, Input } from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;

class AddProjectForm extends React.Component{
   render(){
       return(
           <Form layout="vertical">
            <FormItem label="项目名称">
               <Input />
            </FormItem>
            <FormItem label="项目负责人">
               <Input />
            </FormItem>
            <FormItem label="项目描述">
            <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
            </FormItem>
          </Form>
       )
   }
}

export default AddProjectForm;