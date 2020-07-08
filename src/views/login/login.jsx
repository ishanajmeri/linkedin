import React, { Component } from 'react';
import { Card, Form, Input, Row, Button, Alert, Checkbox } from 'antd';
import { Redirect, Link } from 'react-router-dom';
import auth from '../../services/authService';

class Login extends Component {
  state = {
    errors: null,
  };
  handleFinish = async (values) => {
    try {
      await auth.login(values.username, values.password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        var errors = this.state.errors;
        errors = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <Card>
        <Row justify="center">
          <h3>Login</h3>
        </Row>
        <Row justify="center">
          <Form onFinish={this.handleFinish}>
            {this.state.errors !== null ? (
              <Form.Item>
                <Alert
                  type="error"
                  // description={this.state.errors}
                  showIcon
                  message={this.state.errors}
                />
              </Form.Item>
            ) : null}
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
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link style={{ float: 'right' }} to="">
                Forgot password
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '300px' }}
              >
                Log in
              </Button>
              <br />
              Or <Link to="/register">register now!</Link>
            </Form.Item>
          </Form>
        </Row>
      </Card>
    );
  }
}

export default Login;
