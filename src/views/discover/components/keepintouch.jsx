import React from 'react';
import { Card, Avatar, Divider } from 'antd';

const { Meta } = Card;

const KeepInTouch = () => {
  return (
    <Card style={{ width: '85%', marginTop: '16%', marginLeft: '15%' }}>
      <h4>Keep in touch</h4>
      <Divider />
      <Card bordered={false}>
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card bordered={false}>
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card bordered={false}>
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Card>
  );
};

export default KeepInTouch;
