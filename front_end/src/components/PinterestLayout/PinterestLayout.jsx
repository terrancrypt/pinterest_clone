import React, { useEffect, useState } from "react";
import Pin from "./Pin";
import axios from "axios";

const PinterestLayout = () => {
  const [images, setImages] = useState([
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
    // {img: "https://i.pinimg.com/564x/ef/cd/ee/efcdee1e38a520f3381781cc27f8c148.jpg"},
  ]);
 

  useEffect(() => {
    axios({
      url: "https://63f47c6855677ef68bbcfaf8.mockapi.io/Image",
      method: "GET",
    })
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(images);

  return (
    <div className="absolute grid grid-cols-[repeat(auto-fill,250px)] auto-rows-[10px] w-full pt-[100px] justify-center h-auto">{
        images?.map((image, index)=>{
            return <Pin image={image}/>
        })
    }
      
    </div>
  );
};

export default PinterestLayout;
