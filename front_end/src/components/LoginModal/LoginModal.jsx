import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginModalReducer,
  signUpModalReducer,
} from "../../toolkit/modalSlice";
import CloseIcon from "../../assets/icons/CloseIcon";
import PrimaryIcon from "../../assets/icons/PrimaryIcon";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";

const LoginModal = () => {
  const dispatch = useDispatch();
  const loginModalStatus = useSelector((state) => state.modalSlice.loginModal);
  const switchModal = () => {
    dispatch(loginModalReducer(false));
    dispatch(signUpModalReducer(true));
  };

  return (
    <Modal
      title={
        <div className="flex items-center justify-center">
          <PrimaryIcon />
        </div>
      }
      open={loginModalStatus}
      onCancel={() => dispatch(loginModalReducer(false))}
      footer={null}
      closeIcon={<CloseIcon className={"mt-2 mr-2"} />}
      width={"484px"}
    >
      <h2 className="text-3xl font-semibold">Welcome to Pinterest</h2>
      <div className="w-[268px] mx-auto">
        <LoginForm />

        <hr />

        <span className="flex whitespace-nowrap text-xs mt-2">
          Already a member?
          <button className="ml-1 font-bold" onClick={switchModal}>Not on Pinterest yet? Sign up</button>
        </span>
      </div>
    </Modal>
  );
};

export default LoginModal;
