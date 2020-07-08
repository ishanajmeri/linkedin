import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const Profile = ({ user }) => {
  return (
    <>
      <Card
        style={{ width: '85%', marginTop: '16%' }}
        cover={
          <Avatar
            style={{ marginLeft: '35%', marginTop: '10%' }}
            size={84}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        }
        actions={[
          <div>
            <strong>358</strong>
            <p>Connections</p>
          </div>,
          <div>
            <strong>23</strong>
            <p>Views</p>
          </div>,
        ]}
      >
        <div style={{ marginLeft: '25%' }}>
          <strong>{user ? user.name : null}</strong>
          <p>Statton oakmont</p>
        </div>
      </Card>
      <Card style={{ width: '85%' }}>
        <div style={{ textAlign: 'center' }}>
          <Link to="/profile">View my profile</Link>
        </div>
      </Card>
    </>
  );
};

export default Profile;
