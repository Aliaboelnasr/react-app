import React from "react";
import Heading from "./Heading";


// Keep your original image import method
const imageFiles = import.meta.glob(
  "../assets/images/*.{png,jpg,jpeg,PNG,JPEG}",
  {
    // Changed path to ../assets
    eager: true,
    as: "url",
  }
);

const images = Object.values(imageFiles);

console.log("Image URLs:", images); // For debugging

export default function Portfolio() {
  return (
    <div>
      <Heading text={"portfolio component"} />
      <div className="row">
        {images.map((image, index) =>
          (<div
            key={index}
            className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-5"
          ></div>)(
            <img className="w-full rounded-md" src={image} alt="" />,
            (onclick = (e) => (
              console.log(e.target.getAttribute("src")),
              setImagesource(e.target.getAttribute("src"))
            ))
          )
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-20 center">
          <div
            className=" bg-sky-900 opacity-75 absolute w-full h-full"
            onclick={() => {
              setIsModalOpen(false);
            }}
          ></div>
          <img src={Imagesource} className="w-1/3 -z-30 relative" alt="" />
        </div>
      )}
    </div>
  );
}
