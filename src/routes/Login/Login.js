import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './Login.css'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className={styles.loginWrap}>
               <div className={styles.loginName}>用户登录</div>
               <Form onSubmit={this.handleSubmit} className={styles.loginform}>
                 <FormItem>
                   {getFieldDecorator('userName', {
                     rules: [{ required: true, message: 'Please input your username!' }],
                   })(
                     <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                   )}
                  </FormItem>
                  <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                 })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                 )}
               </FormItem>
               <FormItem>
                  {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                  })(
                    <Checkbox>记住密码</Checkbox>
                )}
          
                <Button type="primary" htmlType="submit" className={styles.loginformbutton}>登录</Button>
         
        </FormItem>
      </Form>
            </div>
        )
    }
}
const Login = Form.create()(NormalLoginForm);
export default Login;