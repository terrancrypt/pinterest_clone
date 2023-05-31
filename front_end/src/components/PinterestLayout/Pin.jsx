import React from 'react'

const Pin = ({image}) => {
    const spanLayoutPin = ["row-end-sm", "row-end-md", "row-end-lg"];
    const randomString = spanLayoutPin[Math.floor(Math.random() * spanLayoutPin.length)];
  return (
    <div className={`mb-4 mx-2 border rounded-2xl bg-black ${randomString} relative overflow-hidden`}>
        <img src={image.image} className='object-cover w-full h-full' alt=''/>
    </div>
  )
}

export default Pin