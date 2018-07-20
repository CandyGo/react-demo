import React from 'react';

const ListComponet = ComponetName => class extends React.Component{
  
    constructor() {
        super();
        this.state = {
           addVisible:false 
        }
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    componentDidMount() {
       
    }

    // 分页 页码改变后执行函数
    onChange(page){
        console.log(page);
    }
   
    // 显示添加框
    showModal(){
        this.setState({
            addVisible: true,
        });  
    }

    // 确定添加
    handleOk = (e) => {
        this.setState({
          addVisible: false,
        });
    }
    
    // 关闭添加框
    handleCancel = (e) => {
        this.setState({
          addVisible: false,
        });
    }

    render(){
        return <ComponetName addVisible={this.state.addVisible} 
        showModal={this.showModal}
        handleOk={this.handleOk}
        handleCancel={this.handleCancel}
        onChange={this.onChange}/>
    }
   
} 

export default ListComponet;