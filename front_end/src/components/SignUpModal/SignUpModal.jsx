import { Modal } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginModalReducer,
  signUpModalReducer,
} from "../../toolkit/modalSlice";
import PrimaryIcon from "../../assets/icons/PrimaryIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import SignUpForm from "./SignUpForm";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const signUpModalStatus = useSelector(
    (state) => state.modalSlice.signUpModal
  );
  const switchModal = () => {
    dispatch(signUpModalReducer(false));
    dispatch(loginModalReducer(true));
  };

  return (
    <Modal
      title={
        <div className="flex items-center justify-center">
          <PrimaryIcon />
        </div>
      }
      open={signUpModalStatus}
      onCancel={() => dispatch(signUpModalReducer(false))}
      footer={null}
      closeIcon={<CloseIcon className={"mt-2 mr-2"} />}
      width={"484px"}
    >
      <h2 className="text-3xl font-semibold">Welcome to Pinterest</h2>
      <p className="text-base py-2">Find new ideas to try</p>
      <div className="w-[268px] mx-auto">
        <SignUpForm />

        <hr />

        <span className="flex whitespace-nowrap text-xs mt-2 justify-center">
          Already a member?
          <button className="ml-1 font-bold" onClick={switchModal}>
            Login
          </button>
        </span>
      </div>
    </Modal>
  );
};

export default SignUpModal;
