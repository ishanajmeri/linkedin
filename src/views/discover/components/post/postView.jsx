import React, { Component } from 'react';
import { Card, Row, Menu, Input, List, Space, Avatar, Divider } from 'antd';
import Icon from 'react-icons-kit';
import { pencilSquareO } from 'react-icons-kit/fa/pencilSquareO';
import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
import { book } from 'react-icons-kit/fa/book';
import { MessageOutlined, LikeOutlined } from '@ant-design/icons';
class PostView extends Component {
  state = {};
  handlePhoto = () => {
    console.log('object');
  };
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
    const IconText = ({ icon, text }) => (
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    );
    return (
      <div>
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
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={(item) => (
            <Card style={{ marginTop: '2%' }}>
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  // description={item.description}
                />
                <Divider type="horizontal" />
                {item.content}
              </List.Item>
            </Card>
          )}
        />
      </div>
    );
  }
}

export default PostView;
