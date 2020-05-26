import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Row, Col, Dropdown, Divider, Input } from 'antd';
import {
  DownOutlined,
  AntCloudOutlined,
  FlagOutlined,
} from '@ant-design/icons';

class Navbar extends Component {
  state = { current: '/' };
  handleClick = (e) => {
    // console.log(e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    const menu = (
      <Menu onClick={this.handleClick}>
        <Menu.Item>Discover</Menu.Item>
        <Menu.Item>My message</Menu.Item>
        <Menu.Item>profile</Menu.Item>
      </Menu>
    );
    return (
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
            <Dropdown overlay={menu}>
              <a href="//#endregion" className="ant-dropdown-link">
                Menu <DownOutlined />
              </a>
            </Dropdown>
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
          <Menu
            onClick={this.handleClick}
            mode="horizontal"
            style={{ lineHeight: '54px', float: 'right' }}
          >
            <Menu.Item>
              <NavLink to="">
                <AntCloudOutlined style={{ fontSize: '15px', padding: '5%' }} />
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="">
                <FlagOutlined style={{ fontSize: '15px', padding: '5%' }} />
              </NavLink>
            </Menu.Item>
            {/* admin menu */}
          </Menu>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
