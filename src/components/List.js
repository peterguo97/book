import React from 'react';
import { List } from 'antd';
import { connect } from 'dva';
const BookList = (props) =>{
    return(
        <div>
            <h3 style={{ marginBottom: 16 }}>最新入库小说</h3>
            <List
                style={{ background: '#fff'}}
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                itemLayout="horizontal"
                bordered
                dataSource={props.book.list}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta                          
                            title={<a href="https://ant.design">{item}</a>}  
                        />
                    </List.Item>)}
            />
        </div>
    );
} 
function mapStateToProps({book}) {
    return {book};
}

export default connect(mapStateToProps)(BookList);