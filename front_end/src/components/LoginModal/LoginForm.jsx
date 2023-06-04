import { Form, Input, message } from "antd";
import React from "react";
import userServices from "../../services/api/userServices";
import localUserService from "../../services/localUserService";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../toolkit/userSlice";
import { loginModalReducer } from "../../toolkit/modalSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const fetchAPI = async () => {
      try {
        const { data } = await userServices.postLogin(values);
        dispatch(setUserLogin(data.content));
        localUserService.set(data.content);
        dispatch(loginModalReducer(false));
        message.success(data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
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
          name="passWord"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            className=" rounded-2xl text-base py-3 text-gray-600"
          />
        </Form.Item>
        <Form.Item>
          <button type="primary" className="main_button w-full mt-2">
            Log in
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
