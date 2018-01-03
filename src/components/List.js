import React from 'react';
import { List, Icon, Row, Col } from 'antd';
import { connect } from 'dva';
import LeftList from './LeftList';
const BookList = (props) =>{
    return(
        <div>
            <Row type="flex" justify="center" align="top">
                <Col span={3}>
                    <LeftList />
                </Col>
                <Col span={12} offset={2}>
                    <h3 style={{ marginBottom: 16 }}>最新入库小说</h3>
                    <List
                        style={{ background: '#fff' }}
                        header={<div>最新小说集</div>}
                        itemLayout="horizontal"
                        bordered
                        dataSource={props.list}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{item.name}</a>}
                            />
                            <div>{item.price}<Icon type="pay-circle" /></div>
                        </List.Item>)}
                    />
                </Col>
            </Row>
            
            
        </div>
    );
} 

function mapStateToProps({book}) {
    return {list: book.list};
}

export default connect(mapStateToProps)(BookList);