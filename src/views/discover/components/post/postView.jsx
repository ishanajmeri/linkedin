import React, { Component } from 'react';
import { Tabs, Input, Card } from 'antd';
// import { PencilAlt } from '@styled-icons/fa-solid';
// import { AddAPhoto } from '@styled-icons/material';
// import { BookOpen } from '@styled-icons/boxicons-regular';

class PostView extends Component {
  state = {};
  handleChange = (e) => {
    console.log(e.target.value, 'share an update');
  };
  render() {
    return (
      <Card>
        <Tabs defaultActiveKey="1" size="small">
          <Tabs.TabPane
            tab={
              <span>
                {/* <PencilAlt size="12" /> */}
                &nbsp;Share an update
              </span>
            }
            key="1"
          >
            <Input.TextArea
              row={3}
              placeholder="write something.."
              onChange={this.handleChange}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                {/* <AddAPhoto size="12" /> */}
                &nbsp;Upload a photo
              </span>
            }
            key="2"
          >
            {/* <Upload /> */}upload
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span>
                {/* <BookOpen size="12" /> */}
                &nbsp;Write an article
              </span>
            }
            key="3"
          >
            article
          </Tabs.TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default PostView;
