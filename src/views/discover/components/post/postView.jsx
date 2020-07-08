import React, { Component } from 'react';
import { Card, Row, Menu, Input } from 'antd';
import Icon from 'react-icons-kit';
import { pencilSquareO } from 'react-icons-kit/fa/pencilSquareO';
import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
import { book } from 'react-icons-kit/fa/book';
class PostView extends Component {
  state = {};
  handlePhoto = () => {
    console.log('object');
  };
  render() {
    return (
      <Card>
        <Row>
          <Menu defaultSelectedKeys={['1']} mode="horizontal">
            <Menu.Item key="1">
              <Icon icon={pencilSquareO} />
              &nbsp; Share an update
            </Menu.Item>
            <Menu.Item key="2" onClick={this.handlePhoto}>
              <Icon icon={ic_add_a_photo} />
              &nbsp; Upload a photo
            </Menu.Item>
            <Menu.Item key="3">
              <Icon icon={book} />
              &nbsp;Write an article
            </Menu.Item>
          </Menu>
        </Row>
        <br />
        <Row>
          <Input.TextArea placeholder="write something" />
        </Row>
      </Card>
    );
  }
}

export default PostView;
