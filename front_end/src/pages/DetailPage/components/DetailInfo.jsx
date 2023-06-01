import React from "react";
import DetailInfoHeader from "./DetailInfoHeader";
import DetailInfoBody from "./DetailInfoBody";
import DetaiInfoFooter from "./DetaiInfoFooter";

const DetailInfo = () => {
  return (
    <div className="w-1/2">
      <div className="max-h-[917px] flex flex-col px-8 justify-between">
        <DetailInfoHeader />
        <DetailInfoBody />
        <DetaiInfoFooter />
      </div>
    </div>
  );
};

export default DetailInfo;
