import  React from 'react';
import { Layout,Menu } from 'antd';
import BookList from './List.js';
import Head from './Header.js';
const { Content, Sider, Footer} = Layout;
class MainLayout extends React.Component {
    render(){
        return(
            <div>
                <Layout>
                    <Head/>
                    <div>
                        {this.props.children}
                    </div>
                    <Footer></Footer>
                </Layout>
            </div>
        )
    }
}

export default MainLayout;