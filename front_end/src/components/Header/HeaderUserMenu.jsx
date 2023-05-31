import React from "react";
import { BellFilled, MessageFilled, UpCircleFilled } from "@ant-design/icons";

const HeaderUserMenu = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="h-12 w-12 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer">
        <BellFilled className="text-2xl text-[#5f5f5f] rounded-full pb-2" />
      </span>
      <span className="h-12 w-12 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer">
        <MessageFilled className="text-2xl text-[#5f5f5f] rounded-full pb-2" />
      </span>
      <span className="h-12 w-12 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer">
        <UpCircleFilled className="text-xl text-[#5f5f5f] rounded-full pb-2" />
      </span>
    </div>
  );
};

export default HeaderUserMenu;
