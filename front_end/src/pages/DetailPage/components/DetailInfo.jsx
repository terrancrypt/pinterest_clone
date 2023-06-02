import React from "react";
import DetailInfoHeader from "./DetailInfoHeader";
import DetailInfoBody from "./DetailInfoBody";
import DetaiInfoFooter from "./DetaiInfoFooter";

const DetailInfo = () => {
  return (
    <div className="w-1/2 max-h-[917px] flex flex-col">
      <div className="h-full flex flex-col px-8">
        <DetailInfoHeader />
        <DetailInfoBody />
       
      </div>
      <DetaiInfoFooter />
    </div>
  );
};

export default DetailInfo;
