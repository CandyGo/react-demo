import React from 'react';
import { Table, Button,Modal} from 'antd';
import ListComponet from '../../utils/listComponent.js';
import styles from './productList.css'
import AddProduct from './addProduct.js'


const columns = [{
    title: '文档名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '上传者',
    dataIndex: 'name1',
    key: 'name1',
  }, {
    title: '上传日期',
    dataIndex: 'date',
    key: 'date',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="http://www.baidu.com" target='_blank'>查看</a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    name1: 'John Brown',
  }, {
    key: '2',
    name: 'Jim Green',
    name1: 'John Brown',
  }, {
    key: '3',
    name: 'Joe Black',
    name1: 'John Brown',
  }];
  

class ProductList extends React.Component{
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
        return(
            <div>
                <div className={styles.newbtn}>
                   <Button type="primary" onClick={this.showModal}>上传文档</Button>
                </div>
               
               <Table bordered columns={columns} dataSource={data} onChange={this.onChange}/>

               {/* 上传弹窗 */}
               <Modal
                 title="上传文档"
                 visible={this.state.addVisible}
                 onOk={this.handleOk}
                 onCancel={this.handleCancel}
                 okText="确认"
                 cancelText="取消"
               >
                 <AddProduct />
              </Modal>
            </div>
        
        )
      
    }
}

export default ListComponet(ProductList);