import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar/navbar';

const MainLayout = (props) => {
  return (
    <div>
      <Layout>
        <Navbar upperNav={props.children.props.match.path} />
        <main>
          {/* {childern} */}
          {props.children}
        </main>
      </Layout>
    </div>
  );
};

export default MainLayout;
