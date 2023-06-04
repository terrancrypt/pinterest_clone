import React, { useRef } from "react";
import { BellFilled, MessageFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import {
  loginModalReducer,
  signUpModalReducer,
} from "../../toolkit/modalSlice";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const HeaderUserMenu = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSlice.userInfo);

  return (
    <div className="flex justify-center items-center">
      <span className="h-12 w-12 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer">
        <BellFilled className="text-2xl text-[#5f5f5f] rounded-full" />
      </span>
      <span className="h-12 w-12 rounded-full flex justify-center items-center hover:bg-gray-200 cursor-pointer">
        <MessageFilled className="text-2xl text-[#5f5f5f] rounded-full" />
      </span>
      {userInfo ? (
        <NavLink className="pl-2 pt-2">
          {userInfo.avatar ? (
            <Avatar src={userInfo.avatar} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
        </NavLink>
      ) : (
        <>
          <button
            onClick={() => dispatch(loginModalReducer(true))}
            className="main_button mr-1"
          >
            Login
          </button>
          <button
            onClick={() => dispatch(signUpModalReducer(true))}
            className="secondary_button"
          >
            Sign up
          </button>
        </>
      )}

      {/* Modal */}
      <LoginModal />
      <SignUpModal />
    </div>
  );
};

export default HeaderUserMenu;
