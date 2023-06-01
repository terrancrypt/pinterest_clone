import React from "react";
import DetailInfoUtils from "./DetailInfoUtils";

const DetailInfoHeader = () => {
  return (
    <div className="sticky_component sticky top-16 z-20 block">
      <div className="min-h-[92px] pt-8">
        <div className="flex bg-white">
          <DetailInfoUtils />
        </div>
      </div>
    </div>
  );
};

export default DetailInfoHeader;
