import React from 'react';
import { Layout } from 'antd';
import Navbar from './navbar/navbar';

const MainLayout = (props) => {
  return (
    <div>
      <Layout>
        <Navbar
          path={props.children.props.match.path}
          name={props.children.type.name}
          user={props.user}
        />
        <main>
          {/* {childern} */}
          {props.children}
        </main>
      </Layout>
    </div>
  );
};

export default MainLayout;
