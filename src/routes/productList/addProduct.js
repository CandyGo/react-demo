import React from 'react';
import { Form, Input,Upload, Icon, message} from 'antd';
const { TextArea } = Input;
const FormItem = Form.Item;
const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  

class AddProduct extends React.Component{
    render(){
        return(
          <div>
           <Form layout="vertical">
            <FormItem>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                   <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖拽文件到此处进行文件上传</p>
                 <p className="ant-upload-hint">支持.doc、.docx、.xls、.xlsx、.ppt、.pdf、.png、.jpg、.jpeg、.zip文件格式</p>
              </Dragger>
            </FormItem>
        
            <FormItem label="标题">
               <Input />
            </FormItem>
            <FormItem label="备注">
            <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
            </FormItem>
          </Form>
          </div>
        )
    }
}

export default AddProduct;