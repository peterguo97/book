import React from 'react';
import { Input, Icon, Button } from 'antd';
import { connect } from 'dva';
const { TextArea } = Input;
class TextInput extends React.Component {
    handleClick() {
        let book = {
            name : this.refs.BookName.value,
            description: this.refs.BookText.value,
            price: this.refs.BookPrice.value
        }
        this.props.dispatch({
            type: 'add',
            payload: book
        })
    }
    render(){
        return(
            <div style={{margin:'20px'}}>
                <Input style={{ margin: '0 0 10px' }} addonBefore="书名" ref="BookName" placeholder="请输入书名" />
                <TextArea style={{ margin: '0 0 10px' }} placeholder="请输入书籍描述" ref="BookText" autosize={{ minRows: 3, maxRows: 6 }} />
                <Input style={{ margin: '0 0 10px' }} addonBefore={<Icon type="pay-circle-o"/>} ref="BookPrice" placeholder="请输入价格" />
                <Button onClick={this.handleClick.bind(this)}>提交</Button>
            </div>
        )
    }
}

const mapStateToProps = ({book}) => {
    return {};
};

export default connect(mapStateToProps)(TextInput);