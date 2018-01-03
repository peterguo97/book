import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const MenuItemGroup = Menu.ItemGroup;

class LeftList extends React.Component{
    render(){
        return(
            <Menu
                mode = 'vertical' theme = 'light'
            >
                <MenuItemGroup title = '图书分类'>
                    <Menu.Item key="list1">
                        <Link to = "/list1" />小说
                    </Menu.Item>
                    <Menu.Item key="list2">
                        <Link to="/list2" />营销管理
                    </Menu.Item>
                    <Menu.Item key="list3">
                        <Link to="/list3" />计算机
                        </Menu.Item>
                    <Menu.Item key="list4">
                        <Link to="/list4" />科普
                    </Menu.Item>                  
                </MenuItemGroup>
            </Menu>
        )
    }
}

export default LeftList;