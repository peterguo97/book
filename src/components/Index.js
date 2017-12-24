import  React from 'react';
import { Layout,Menu } from 'antd';
import BookList from './List.js';
import Head from './Header.js';
const { Content, Sider, Footer} = Layout;

const Index = () =>{
    return(
        <div>
            <Layout>
               <Head />
                <Layout>
                    <Sider>
                        <BookList />
                    </Sider>
                    <Content></Content>
                </Layout>
                <Footer></Footer>
            </Layout>
        </div>
    )
} 
export default Index;