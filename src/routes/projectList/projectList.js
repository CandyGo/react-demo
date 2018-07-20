import { List, Card, Button, Icon, Pagination, Modal} from 'antd';
import React from 'react';
import { Link } from 'dva/router';
import styles from './projectList.css';
import ListComponet from '../../utils/listComponent.js';
import AddProjectForm from './addProjectForm.js';

const data = [
{
    title: '项目名称',
    name:'李宁',
    detail:'本项目主要是用于瞎比比的项目，欢迎广大群众来比比，看谁能成为比中之神。'
  },
];

class ProjectList extends React.Component{
   constructor(props) {
    super(props);
    this.onChange = props.onChange;
    this.showModal = props.showModal;
    this.handleOk = props.handleOk;
    this.handleCancel = props.handleCancel;

    this.state={
       addVisible:props.addVisible
    }
   }

   componentWillReceiveProps(props){
    if(props.addVisible != this.state.addVisible){
        this.setState({
         addVisible:props.addVisible
        })
    }
  }


   render(){
   
    return (
      <div>
        {/* 项目列表 */}
        <List
         grid={{ gutter: 16, column: 4 }}
         dataSource={['',...data]}
         renderItem={item => item ?(
         <List.Item>
           <Card title={item.title} extra={<Link to="/index/ProductList/100">进入</Link >}>
               <p><b>项目负责人：</b>{item.name}</p>
               <p className={styles.detailBox}><b>项目描述：</b>{item.detail}</p>
           </Card>
         </List.Item>
         ):(
          <List.Item>
            <Button type="dashed" className={styles.addBtn} onClick={this.showModal}>
              <Icon type="plus"/> 新增产品
            </Button>
           </List.Item>
         )}
        />
        
        {/* 分页 */}
        <div className={styles.pageBox}>
           <Pagination defaultCurrent={1} total={20} onChange={this.onChange}/>
        </div>

        {/* 项目添加 弹窗 */}
        <Modal
          title="创建项目"
          visible={this.state.addVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <AddProjectForm />
        </Modal>

      </div>
    );
   }
}



export default ListComponet(ProjectList);



