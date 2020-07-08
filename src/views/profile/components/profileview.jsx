import React from 'react';
import { Card, Avatar, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { twitter } from 'react-icons-kit/fa/twitter';
import { skype } from 'react-icons-kit/fa/skype';
const ProfileView = ({ user }) => {
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
        <Row>
          <Link to="" style={{ color: 'gray' }}>
            <Icon icon={linkedinSquare} /> &nbsp; linkedin.com/...
          </Link>
        </Row>
        <Row>
          <Link to="" style={{ color: 'gray' }}>
            <Icon icon={twitter} /> &nbsp; twitter.com/...
          </Link>
        </Row>
        <Row>
          <Link to="" style={{ color: 'gray' }}>
            <Icon icon={skype} /> &nbsp; skype.com/...
          </Link>
        </Row>
      </Card>
    </>
  );
};

export default ProfileView;
