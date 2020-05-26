import React, { Component } from 'react';
import { Tabs, Row, Col } from 'antd';
import Profile from './components/profile';
import KeepInTouch from './components/keepintouch';
import PostView from './components/post/postView';
class Discover extends Component {
  state = {};
  render() {
    return (
      <Row justify="center">
        <Col span={7}>
          <Profile />
        </Col>
        <Col span={10}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Posts" key="1">
              <PostView />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Articles" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Companies" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
            <Tabs.TabPane tab="Jobs" key="4">
              Content of Tab Pane 4
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col span={7}>
          <KeepInTouch />
        </Col>
      </Row>
    );
  }
}

export default Discover;
