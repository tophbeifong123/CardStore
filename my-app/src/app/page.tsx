"use client";

import axios from "axios";
import { useState, useEffect, cache } from "react";
import imgundefined from "./imgundefined.jpeg";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  url: string;
}

export default function Home() {
  const boxpixel = {
    boxShadow: "5px 0 ,-5px 0,0 -5px,0 5px",
  }
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

 const DeleteCard = async (_id: string) => {
  try{
    const response = await axios.delete(`http://localhost:4000/products/${_id}`);
    fetchProducts();
  }catch(error){
    console.error("Error fetching products:", error);
  }
 }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex  justify-center  nes-text">
      <div className="w-2/3 h-[100vh] flex flex-col items-center  bg-[#f7ddb4] ">
        <div className="text-4xl font-semibold py-10"><a href="#articles">#</a>Pet Store</div>
        <div className="flex flex-wrap  gap-3 px-16">
          {products?.map((product: Product) => (
            <div key={product._id} style={boxpixel} className="nes-btn w-[250px] h-[350px] flex flex-col gap-2  border-gray-300 border-2 shadow-md">
              
              <div className="h-1/8  flex items-center text-2xl font-semibold text-gray-600">
                <div >{product.name}</div>
              </div>
              <div className="h-5/8 flex justify-center items-center border-4 border-black">
              { product.url ? (
                <img
                  src={product.url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ):(
                <img
                  className="w-full h-full object-cover"
                  src={imgundefined.src}
                  alt="Placeholder"
                />
              )}
              </div>
              <div className="h-2/8 px-4">
                <div className="text-start h-2/3 border-b-2 border-gray-400 text-sm text-gray-600">
                  {product.description}
                </div>
                <div className="h-1/3 text-end font-semibold text-gray-600">
                  {product.price} Bath
                </div>
              </div>
              {/* <button
                  className="nes-btn is-error w-full mt-2"
                  onClick={() => {
                    DeleteCard(product._id);
                  }}
                >
                  Delete
                </button> */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 h-[100vh] bg-[#f6ddb5] flex justify-center border-l-8 border-gray-300 text-white">
          <div className="flex flex-col gap-4 bg-[#209cee] h-[600px] w-full sticky top-0 p-4 border-4 shadow-md">
            <label htmlFor="default_select">Default select</label>
            <div className="nes-select text-black">
              <select required id="default_select">
                <option value="" disabled selected hidden>Select...</option>
                <option value="0">To be</option>
                <option value="1">Not to be</option>
              </select>
            </div>
            <label htmlFor="default_select">Default select</label>
            <div className="nes-select text-black">
              <select required id="default_select">
                <option value="" disabled selected hidden>Select...</option>
                <option value="0">To be</option>
                <option value="1">Not to be</option>
              </select>
            </div>
            <label htmlFor="default_select">Default select</label>
            <div className="nes-select text-black">
              <select required id="default_select">
                <option value="" disabled selected hidden>Select...</option>
                <option value="0">To be</option>
                <option value="1">Not to be</option>
              </select>
            </div>
          </div>
      </div>
    </div>
  );
}
