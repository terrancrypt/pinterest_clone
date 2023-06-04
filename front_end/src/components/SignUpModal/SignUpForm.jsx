import { Form, Input } from "antd";
import React from "react";
import userServices from "../../services/api/userServices";
import https from "../../services/api/config";

const SignUpForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    userServices
      .postSignUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form
        requiredMark={false}
        layout={"vertical"}
        className="pt-4"
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            className=" rounded-2xl text-base py-3 text-gray-600"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Create a password"
            className=" rounded-2xl text-base py-3 text-gray-600"
          />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your age!",
            },
          ]}
        >
          <Input
            placeholder="Age"
            className=" rounded-2xl text-base py-3 text-gray-600"
          />
        </Form.Item>

        <Form.Item>
          <button type="primary" className="main_button w-full mt-2">
            Sign up
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
