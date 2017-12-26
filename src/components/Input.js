import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { connect } from 'dva';
const { TextArea } = Input;
const  FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
class TextInput extends React.Component {
    handleClick() {
        let book = {
            name : this.props.form.getFieldValue('bookname'),
            description: this.props.form.getFieldValue('description'),
            price: this.props.form.getFieldValue('price')
        }
        this.props.form.validateFields( (err) => {
            if(!err){
                console.info('success');
                this.props.dispatch({
                    type: 'book/add',
                    payload: book
                })
            }
        })       
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <FormItem {...formItemLayout} label="书名">
                    {getFieldDecorator('bookname', {
                        rules: [{
                            required: true,
                            message: 'Please input the book name',
                        }],
                    })(
                        <Input placeholder="Please input the book name" />
                        )}
                </FormItem>
                <FormItem {...formItemLayout} label="描述"> 
                    {getFieldDecorator('description', {
                        rules: [{
                            required: false,
                        }],
                    })(
                        <Input placeholder="Please input the book description" />
                        )}          
                </FormItem>
                <FormItem {...formItemLayout} label="价格">
                    {getFieldDecorator('price', {
                        rules: [{
                            required: true,
                            message: 'Please input the book price',
                        }],
                    })(
                        <Input addonBefore={<Icon type="pay-circle-o" />} placeholder="Please input the book price" />
                        )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button type="primary" onClick={this.handleClick.bind(this)}>
                        提交
                    </Button>
                </FormItem>
            </div>
        )
    }
}

TextInput = Form.create({})(TextInput);
const mapStateToProps = ({book}) => {
    return { data: book.list[0]};
};

export default connect(mapStateToProps)(TextInput);