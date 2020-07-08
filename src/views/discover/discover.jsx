import React, { Component } from 'react';
import { Tabs, Row, Col, Card } from 'antd';
import Profile from './components/profile';
import KeepInTouch from './components/keepintouch';
import PostView from './components/post/postView';
class Discover extends Component {
  state = {};
  componentDidMount() {
    if (this.props.user === null) {
      window.location = '/login';
    }
  }
  render() {
    return (
      <Card>
        <Row>
          <Col span={6} offset={1}>
            <Profile user={this.props.user} />
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
          <Col span={6}>
            <KeepInTouch />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Discover;
