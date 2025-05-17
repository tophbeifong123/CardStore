"use client";
import { useState, useEffect } from "react";
import catlogo from "../catlogo.png";
export default function Card() {
  const boxpixel = {
    boxShadow: "10px 0 ,-10px 0,0 -10px,0 10px",
  }
  const [cardname, setCardName] = useState("Name");
  const [description, setDescription] = useState("Description");
  const [price, setPrice] = useState(0);

  const PostCard = async () => {
    try {
      const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cardname,
          description: description,
          price: price,
          url: catlogo.src,
        }),
      });
    }catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="flex justify-center bg-[#f7ddb4] h-[100vh]">
      <div className="w-1/2  border-r-8 border-gray-300 flex  flex-col items-center ">
        <div className="text-4xl font-semibold py-10">
          <a href="#articles">#</a>Create Card
        </div>
        <div className="w-[450px] h-[550px] flex flex-col gap-2 bg-white shadow-xl nes-btn" style={boxpixel}> 
          <div className="h-1/8 bg-white flex items-center px-2 text-2xl font-semibold text-gray-600">
            <div className="flex">{cardname}</div>
          </div>
          <div className="h-5/8 flex justify-center items-center border-8 border-black">
          <img
          className="w-full h-full object-cover"
          src={catlogo.src}
          alt={cardname}
          />
          </div>
          <div className="bg-white h-2/8 px-4">
            <div className="h-2/3 border-b-4 border-black text-sm text-gray-600 text-start py-2">
             {description}
            </div>
            <div className="h-1/3 text-end font-semibold text-gray-600">
             {price} Bath
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 py-8">
        <div className="nes-container is-dark with-title">
          <div className="title">input</div>
          <div className="flex flex-col gap-8 py-12">
            <div>
              <div className="nes-field flex flex-col gap-2">
                <label htmlFor="name_field">Your Name Card:</label>
                <input
                  type="text"
                  id="dark_field"
                  className="nes-input is-dark"
                  placeholder="dark.css"
                  value={cardname}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="nes-field flex flex-col gap-2">
                <label htmlFor="name_field">Description:</label>
                <input
                  type="text"
                  id="dark_field"
                  className="nes-input is-dark"
                  placeholder="dark.css"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="nes-field flex flex-col gap-2 ">
                <label htmlFor="name_field">Price:</label>
                <input
                  type="text"
                  id="dark_field"
                  className="nes-input is-dark"
                  placeholder="dark.css"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="pb-4">
              <label htmlFor="file">Upload File:</label>
              <input
                type="file"
                id="file"
                className="file-input file-input-warning"
                title="Choose a file to upload"
              />
            </div>
          </div>
          <div className="tooltip ">
            <div className="tooltip-content">
              <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black bg-[#212529]">
                Wow!
              </div>
            </div>
            <button className="btn" onClick={() => PostCard()}>Hover me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
