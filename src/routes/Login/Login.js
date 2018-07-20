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
                   {getFieldDecorator('username', {
                     rules: [{ required: true, message: '用户名不能为空!' }],
                   })(
                     <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                   )}
                  </FormItem>
                  <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '密码不能为空!' }],
                 })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
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