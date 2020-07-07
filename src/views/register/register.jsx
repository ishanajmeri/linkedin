import React, { Component } from 'react';
import { Card, Form, Input, Row, Button } from 'antd';
import * as userService from '../../services/userServices';
import auth from '../../services/authService';

class Register extends Component {
  state = {
    errors: '',
  };
  handleFinish = async (values) => {
    try {
      const response = await userService.register(values);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        var errors = this.state.errors;
        errors = ex.response.data;
        console.log(errors);
        this.setState({ errors });
      }
    }
  };
  render() {
    console.log(this.state.errors);
    return (
      <Card>
        <Row justify="center">
          <h3>Register</h3>
        </Row>
        <Row justify="center">
          <Form onFinish={this.handleFinish}>
            {/* <Alert type="error" description={this.state.errors} /> */}
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
                { min: 5, max: 255, message: 'Email must be between 5 to 255' },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

export default Register;
