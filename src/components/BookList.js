import React from 'react';
import imgSrc from '../../public/1.jpg';
import {  Card, Col, Row } from 'antd';
const { Meta } = Card;
const data = [
    [
        { title: '阿甘', description: '讲述阿甘的奋斗'},
        { title: '阿甘1', description: '讲述阿甘的奋斗' },
        { title: '阿甘2', description: '讲述阿甘的奋斗' },
        { title: '阿甘3', description: '讲述阿甘的奋斗' },
    ],
    [
        { title: '阿甘4', description: '讲述阿甘的奋斗' },
        { title: '阿甘5', description: '讲述阿甘的奋斗' },
        { title: '阿甘6', description: '讲述阿甘的奋斗' },
        { title: '阿甘7', description: '讲述阿甘的奋斗' },
    ],
    [
        { title: '阿甘8', description: '讲述阿甘的奋斗' },
        { title: '阿甘9', description: '讲述阿甘的奋斗' },
        { title: '阿甘10', description: '讲述阿甘的奋斗' },
        { title: '阿甘11', description: '讲述阿甘的奋斗' },
    ],
    [
        { title: '阿甘12', description: '讲述阿甘的奋斗' },
        { title: '阿甘13', description: '讲述阿甘的奋斗' },
        { title: '阿甘14', description: '讲述阿甘的奋斗' },
        { title: '阿甘15', description: '讲述阿甘的奋斗' },
    ]
]

class BookList extends React.Component {
    render(){
        return(
            <div key={'book'}>
                <Row type="flex" justify="center">
                {
                    data.map( items => (
                        items.map( item => (
                            <Col span={5} key={item.title} style={{"padding": "5px"}}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src={imgSrc} />}
                                >
                                    <Meta
                                        title={item.title}
                                        description={item.description}
                                    />
                                </Card>
                            </Col>
                        ))
                    ))
                }
                </Row>
            </div>
        )
    }
}

export default BookList;