import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { Link } from 'dva/router';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
 
function Head(){
    return(
        <Menu
        defaultSelectedKeys={['1']}
        mode="horizontal"
        theme="light"
        >
        <Menu.Item key="1">
            <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="/input">
                <Link to="/input"><Icon type="" /><Icon type="plus-square-o" />录入书籍</Link>
        </Menu.Item>
        <Menu.Item key="/antd">
            <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
        </Menu.Item>
        <SubMenu title={<span><Icon type="user" />用户</span>}>
            <MenuItemGroup title="用户">
                <Menu.Item key="/login">
                    <Link to="/login"><Icon type="home" />用户登陆</Link>
                </Menu.Item>
                <Menu.Item key="/register">
                    <Link to="/register"><Icon type="home" />用户注册</Link>
                </Menu.Item>
            </MenuItemGroup>
        </SubMenu>
        </Menu>
    )     
}

export default Head;