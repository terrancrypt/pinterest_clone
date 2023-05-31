import React from "react";
import { NavLink } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const HeaderNav = () => {
  const items = [
    {
      key: "1",
      label: (
        <NavLink className="font-medium text-base">
        Tạo Ghim ý tưởng
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink className="font-medium text-base">
        Tạo Ghim
        </NavLink>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center space-x-2">
      <span className=" h-14 flex justify-center items-center">
        <img src="/favicon.svg" alt="Favicon" />
      </span>

      <NavLink className=" h-12 min-w-[60px] px-4 flex items-center justify-center rounded-3xl cursor-pointer text-white bg-black font-medium">
        Trang chủ
      </NavLink>

      <Dropdown
        menu={{
          items,
        }}
        className="h-12 min-w-[60px] px-4 rounded-3xl cursor-pointer flex items-center justify-center font-medium"
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Tạo
            <DownOutlined className="pb-1" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default HeaderNav;
