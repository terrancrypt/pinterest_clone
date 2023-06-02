import React from "react";
import DetailInfoUtils from "./DetailInfoUtils";

const DetailInfoHeader = () => {
  return (
    <div className="sticky top-16 z-20 block">
      <div className="min-h-[92px] pt-8 bg-white">
        <div className="flex justify-between">
          <DetailInfoUtils />
          <button type="button" className="main_button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default DetailInfoHeader;
