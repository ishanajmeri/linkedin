import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Row, Col, Divider, Input, Layout, Select, Button } from 'antd';
import { AntCloudOutlined, FlagOutlined } from '@ant-design/icons';

class Navbar extends Component {
  state = { current: true, path: this.props.path };

  handleChange = (e) => {
    console.log(e, 'handleChange');
    this.setState({ current: false, path: e });
  };
  render() {
    const { user } = this.props;
    if (this.state.path === '/login') return null;
    else
      return (
        <Layout.Header style={{ backgroundColor: 'white' }}>
          <Row gutter={0}>
            <Col span={1}>
              <NavLink to="/">
                <img
                  src="https://img.icons8.com/color/20/000000/linkedin.png"
                  alt="some"
                />
              </NavLink>
              <Divider type="vertical" />
            </Col>
            <Col span={4}>
              <Row justify="start">
                <Select
                  defaultValue={this.props.name}
                  onChange={this.handleChange}
                  style={{ width: 120, marginTop: '10%' }}
                >
                  <Select.Option value="/discover">discover</Select.Option>
                  <Select.Option value="/profile">profile</Select.Option>
                </Select>
                {!this.state.current && <Redirect to={`${this.state.path}`} />}
              </Row>
            </Col>
            <Col span={13}>
              <Input.Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                style={{ width: '60%' }}
              />
            </Col>
            <Col span={6}>
              <Link to="/notifications">
                <AntCloudOutlined
                  style={{ fontSize: '15px', padding: '10%' }}
                />
              </Link>
              <Link to="/message">
                <FlagOutlined style={{ fontSize: '15px', padding: '5%' }} />
              </Link>
              {user && (
                <React.Fragment>
                  <Button type="link">
                    <NavLink to="/profile">{user.name}</NavLink>
                  </Button>
                  <Button type="primary">
                    <NavLink to="/logout">Logout</NavLink>
                  </Button>
                </React.Fragment>
              )}
            </Col>
          </Row>
        </Layout.Header>
      );
  }
}

export default Navbar;
