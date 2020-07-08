import React, { Component } from 'react';
import { Card, Row, Col, Tabs } from 'antd';
import ProfileView from './components/profileview';

class Profile extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Row>
          <Col span={6} offset={1}>
            <ProfileView user={this.props.user} />
          </Col>
          <Col span={10}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Details" key="1">
                {/* <PostView /> */}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Posts" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane tab="Contacts" key="3">
                Content of Tab Pane 3
              </Tabs.TabPane>
              <Tabs.TabPane tab="Improve" key="4">
                Content of Tab Pane 4
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={6}>{/* <KeepInTouch /> */}</Col>
        </Row>
      </Card>
    );
  }
}

export default Profile;
