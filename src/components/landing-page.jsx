import React, { useState } from "react";
import StoreIcon from "../assets/storeIcon.png";
import kartIcon from "../assets/kartIcon.png";
import Wave from "../assets/wave.svg";
import Product1 from "../assets/product1.svg";
import leftIcon from "../assets/left.svg";
import scrollDown from "../assets/scrollDown.svg";

function LandingPage() {
  const navArr = ["Home", "Shop", "About Us", "Help"];
  const productArr = [1, 2, 3, 4, 5, 6, 7];

  const [currentProduct, setCurentProduct] = useState(0);

  return (
    <div className="bg-gradient-to-r from-cyan-400  to-[#6aafff] h-[100vh] relative">
      <div className="bg-pink-400 absolute w-[25rem] h-[34rem] top-[-100px] blur-3xl opacity-65 left-[10rem] shadow-white rounded-3xl -rotate-12"></div>
      <div className="bg-white absolute w-[40rem] h-[35rem] top-0 blur-3xl opacity-30 left-[10rem] rounded-xl"></div>

      {/* Wave background */}
      <img
        className="w-[100vw] z-10 absolute bottom-0 right-0"
        src={Wave}
        alt="wave"
      />

      {/* Navigation bar */}
      <div className="flex justify-between items-center py-8 px-20 text-white relative z-20">
        <img src={StoreIcon} alt="Store" />

        <div className="flex-1 ml-2">
          <p className="text-xl">Pop Rock Crystal</p>
        </div>

        <div className="flex gap-10">
          {navArr.map((item, index) => (
            <a key={index}>{item}</a>
          ))}
        </div>

        <p className="px-10 ml-40">
          <img src={kartIcon} alt="cart" />
        </p>
      </div>

      {/* Product section */}
      <div className="flex z-30 relative">
        <div className="flex flex-col w-1/2 pl-20  py-20">
          <p className="text-[2rem] font-normal leading-4 text-white font-inter">
            Welcome to
          </p>
          <p className="text-[3.8rem] font-bold text-white font-inter">
            Pop Rock Crystal Shop!
          </p>

          <p className="py-4 pr-[17rem] my-2 text-[#25566e] font-inter">
            Here you will find unique phone accessories, crystals, jewelry and
            more. Free shipping inside the U.S. and our phone grips come with a
            limited warranty. Enjoy!
          </p>

          <div>
            <button className="bg-zinc-100 px-6 py-3 rounded-2xl mr-8 uppercase text-[#487890] font-semibold font-inter">
              Shop Now
            </button>
            <button className="text-[#25566e] lowercase font-inter">About Us</button>
          </div>
        </div>

        {/* Product image and details */}
        <div className="flex flex-col w-1/2 pl-32 pt-6 relative z-30 ">
          <div className="w-[33rem] h-[30rem] bg-white rounded-[3rem] flex justify-center items-center flex-col shadow-xl">
            <div>
              <img src={Product1} />
            </div>
            <hr className="bg-zinc-300 w-32 h-[2px]"></hr>

            <div className="mt-4 uppercase text-zinc-500 flex text-lg">
              <p>Crystal Agate Phone Grip</p>
              <p className=" font-bold ml-2 text-[#317189]">- 18.99$</p>
            </div>
          </div>

          <div className="absolute bg-[#8a93e5] px-4 py-2 rounded-r-md top-[5rem]">
            <p className="text-white">New lot</p>
          </div>

          <div className="flex justify-center items-center w-[35vw] mt-4">
            <button>
              <img className="mt-2" src={leftIcon} />
            </button>
            {productArr.map((item, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentProduct == index ? "bg-[#8a93e5]" : "bg-[#d7dbff]"
                }`}
              ></div>
            ))}
            <button>
              <img className="mb-2 rotate-180" src={leftIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className="text-black relative z-50 buttom-0 flex justify-center items-center mt-4">
        <img src={scrollDown} />
        <p className="text-[#317189] ml-2 mb-2">scroll down</p>
      </div>
    </div>
  );
}

export default LandingPage;
