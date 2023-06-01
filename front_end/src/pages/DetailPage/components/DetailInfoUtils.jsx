import { Dropdown, Space } from "antd";
import React from "react";
import DotIcon from "../icons/DotIcon";
import { NavLink } from "react-router-dom";
import UploadIcon from "../icons/UploadIcon";
import ShareIcon from "../icons/ShareIcon";

const manageImg = [
  {
    key: "1",
    label: (
      <NavLink className="font-medium text-base">Tạo Ghim ý tưởng</NavLink>
    ),
  },
  {
    key: "2",
    label: <NavLink className="font-medium text-base">Tạo Ghim</NavLink>,
  },
];

const send = [
  {
    key: "1",
    label: (
      <NavLink className="font-medium text-base">Tạo Ghim ý tưởng</NavLink>
    ),
  },
  {
    key: "2",
    label: <NavLink className="font-medium text-base">Tạo Ghim</NavLink>,
  },
];

const share = [
  {
    key: "1",
    label: (
      <NavLink className="font-medium text-base">Chia sẻ</NavLink>
    ),
  },
  {
    key: "2",
    label: <NavLink className="font-medium text-base">Tạo Ghim</NavLink>,
  },
];

const DetailInfoUtils = () => {
  const listSocial = [
    { icon: <DotIcon />, menu: manageImg },
    { icon: <UploadIcon />, menu: send },
    { icon: <ShareIcon />, menu: share },
  ];

  return (
    <>
    {listSocial.map((item, index)=>{
       return  <div className="w-12 h-12 hover:bg-gray-200 rounded-full flex items-center justify-center" key={index}>
        <Dropdown
          menu={{
            items: item.menu,
          }}
          className="h-12 min-w-[60px] px-4 rounded-3xl cursor-pointer flex items-center justify-center font-medium"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              {item.icon}
            </Space>
          </a>
        </Dropdown>
      </div>
    })}
    </>
  );
};

export default DetailInfoUtils;
