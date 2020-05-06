import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

import { Form, Input, Button, message } from "antd";
import { LockOutlined } from "@ant-design/icons";
import request from "../../request";
import qs from "qs";
// import { Store } from "antd/lib/form/interface";

// interface FormValues {
//   password: string;
// }

class NormalLoginForm<P> extends Component<P> {
  state = {
    isLogin: false,
  };
  onFinish = (values: any) => {
    request
      .post(
        "/api/login",
        qs.stringify({
          password: values.password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        const data: responseResult.login = res.data;
        if (data) {
          this.setState({
            isLogin: true,
          });
        } else {
          message.error("登录失败");
        }
      });
  };
  render() {
    const { isLogin } = this.state;
    console.log(isLogin);
    return this.state.isLogin ? (
      <Redirect to="/" />
    ) : (
      <div className="login-page">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={this.onFinish}
        >
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default NormalLoginForm;
