import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { Header } = Layout;
function Head(){
    return(
        <Header>
            <Menu
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme="dark"
            >
            <Menu.Item key="/">
                <Link to="/"><Icon type="home" />Home</Link>
            </Menu.Item>
            <Menu.Item key="/antd">
                <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
            </Menu.Item>
            </Menu>
        </Header>
    );
}

export default Head;