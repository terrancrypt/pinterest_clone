import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ImageInfoData from "./components/ImageInfoData";

const UploadPage = () => {
  const [imageData, setImageData] = useState({});
  console.log(imageData);

  const imageFile = (file) => {
    setImageData({ ...imageData, image: file });
  };

  return (
    <div className="bg-[#e9e9e9]">
      <div className="pt-[120px] py-10">
        <div className="w-[880px] mx-auto bg-white rounded-2xl p-10">
          <div className="h-14" />
          <div className="flex ">
            <ImageUploader onImageSelected={imageFile} />
            <ImageInfoData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
