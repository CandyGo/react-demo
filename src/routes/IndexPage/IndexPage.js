import styles from './IndexPage.css';
import ProjectList from '../projectList/projectList.js';
import ProductList from '../productList/productList.js';
import ChangePw from './changePw.js';
import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { Layout, Menu, Modal} from 'antd';
const { Header, Content, Footer } = Layout;


class IndexPage extends React.Component{
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
   render(){
    return (
      <Layout className="layout">
      <Header>
      <div className={styles.psbox}>
        <a href='javascrpt:void(0)' onClick={this.showModal}>修改密码</a>
      </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">项目管理</Menu.Item>
        </Menu>
       
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className={styles.routerCont}>
         <Switch>
           <Route path="/index" exact component={ProjectList} />
           <Route path="/index/ProductList/:id" component={ProductList} />
         </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        象形远教科技有限公司 ©2018
      </Footer>
  
      {/* 修改密码弹窗 */}
      <Modal
        footer={null}
        title="修改密码"
        visible={this.state.visible}
        onCancel={this.handleCancel}>
          <ChangePw />
       </Modal>
    </Layout>
    );
   }
 
}



export default IndexPage;
