import React, { useRef, useState } from "react";
import ArrowUp from "../../../assets/icons/ArrowUp";

const ImageUploader = ({ onImageSelected }) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setFile(dataURL);
        onImageSelected(dataURL);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result;
        setFile(dataURL);
        onImageSelected(dataURL);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-[#e9e9e9] p-3 rounded-xl w-[45%] h-[550px] mx-5">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleButtonClick}
        className="w-[full h-full border-[2px] border-dashed border-[#dadada] rounded-md flex items-center justify-center cursor-pointer px-3"
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        {file ? (
          <img
            src={file}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 relative h-full w-full">
            <ArrowUp />
            <p>Drag and drop or click to upload</p>

            <p className="absolute bottom-0 right-0 text-center text-sm pb-2 text-[#7b7b7b]">
              Recommendation: Use high-quality .jpg files less than 20MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
