import React from 'react';

const ListComponet = ComponetName => class extends React.Component{
  
    componentDidMount() {
       console.log("init");
    }

    // 分页 页码改变后执行函数
    onChange(page){
        console.log(page);
    }

    dataReturn(){
        return [1,2,3,4];
    }

    render(){
        return <ComponetName onChange={this.onChange}/>
    }
   
} 

export default ListComponet;