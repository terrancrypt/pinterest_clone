import { Avatar, Form, Input, Space } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const DetaiInfoFooter = () => {
  return (
    <div className="sticky bottom-0 px-8 py-2 bg-white">
      <div className="flex w-full space-x-3 items-center">
        <Avatar
          size={50}
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        />

        <Form className="flex-grow">
          <Form.Item noStyle>
            <Input
              placeholder="Add a comment"
              className="border-none h-full w-full rounded-3xl px-5 py-4 bg-gray-200 focus:bg-transparent focus:shadow-none focus:border-solid focus:border-slate-300	 text-base font-semibold"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DetaiInfoFooter;
