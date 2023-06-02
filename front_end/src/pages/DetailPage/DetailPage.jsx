import React from "react";
import DetailInfo from "./components/DetailInfo";

const DetailPage = () => {
  return (
    <div className="flex justify-center items-center pt-[100px] mb-[500px]">
      <div className="w-[1016px] rounded-[32px] shadow-[rgba(0,0,0,0.1)_0px_1px_20px_0px]">
        <div className="w-full flex">
          <div className="w-1/2">
            <img
              src="https://i.pinimg.com/564x/d0/0d/7e/d00d7e5283fe55c03ab1b3f7da4dfd6e.jpg"
              alt=""
            />
          </div>
          <DetailInfo />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
