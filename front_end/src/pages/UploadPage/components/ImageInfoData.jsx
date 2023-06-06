import React from "react";
import { Avatar, Form, Input } from "antd";
import { useSelector } from "react-redux";

const ImageInfoData = () => {
  const userInfo = useSelector((state) => state.userSlice.userInfo);

  const onFinish = (values) => {
    console.log("Values:", values);
  };
  return (
    <div className="w-[55%] mx-5 min-h-[510px] relative">
      <Form onFinish={onFinish}>
        <Form.Item name="title">
          <Input.TextArea
            autoSize
            placeholder="Add your title"
            className="text-4xl font-bold placeholder:text-[#767676] shadow-[rgba(142,142,142,0.5)_0px_1px_0px_0px] focus:shadow-[rgb(0,116,232)_0px_2px_0px_0px] break-words appearance-none caret-[#333] overflow-hidden resize-none w-full h-auto rounded-none border-none px-0"
          />
        </Form.Item>

        <div>
          <Avatar size={50} src={userInfo.avatar} />
          <span className="text-base font-semibold ml-2">
            {userInfo.full_name}
          </span>
        </div>

        <Form.Item name="desc">
          <Input.TextArea
            autoSize
            placeholder="Tell everyone what your Pin is about"
            className="text-base placeholder:text-[#767676] shadow-[rgba(142,142,142,0.5)_0px_1px_0px_0px] focus:shadow-[rgb(0,116,232)_0px_2px_0px_0px] break-words appearance-none caret-[#333] overflow-hidden resize-none w-full h-auto rounded-none border-none px-4 my-5"
          />
        </Form.Item>

        <div className="absolute bottom-0 w-full">
          <Form.Item name="destination_link">
            <Input
              placeholder="Add a destination link"
              className="text-lg placeholder:text-[#767676] shadow-[rgba(142,142,142,0.5)_0px_1px_0px_0px] focus:shadow-[rgb(0,116,232)_0px_2px_0px_0px] appearance-none caret-[#333] resize-none w-full rounded-none border-none px-0"
            />
          </Form.Item>
        </div>

        <div className="absolute -top-[55px] right-0">
        <button type="submit" className="main_button">Save</button>
        </div>

      </Form>
    </div>
  );
};

export default ImageInfoData;
