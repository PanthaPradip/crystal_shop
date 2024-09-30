import React from "react";
import FooterPng from "../assets/footer.png";
import ProductImage from "../assets/product1.svg";

function Footer() {
  return (
    <div className=" relative">
      <div className="absolute -z-[1] -bottom-28 w-[100vw]">
        <img
          className="bg-gradient-to-r from-[#74dcf8] to-[#85c3fe] w-full"
          src={FooterPng}
          alt="Footer Background"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 py-20 px-20">
        <div className="main flex">
          <div className="flex flex-col w-1/2 text-right mt-20">
            <p className="text-[3rem] leading-5 text-[#44637a] font-inter">
              BEST PRICE
            </p>
            <p className="text-[4rem] font-semibold text-[#31546d] font-inter">
              Agate Phone Grip
            </p>

            <div className="flex justify-end items-center gap-5">
              <p className="line-through text-xl text-[#41a0b7] font-semibold font-inter">
                44.50$
              </p>
              <p className="text-[4rem] text-[#e35b3e] font-semibold font-inter">
                19.50$
              </p>
            </div>

            <p className="text-[#748c9d] pl-[17rem] font-inter">
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>

            <div className="mt-8">
              <button className="text-right px-9 py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#74caed] to-[#70b8fc]">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center w-1/2">
            <div
              className="absolute w-[40rem] h-[40rem] rounded-full bg-white  opacity-40 -z-[2] rotate-[-70deg]"
              style={{ clipPath: "polygon(50% 50%, 0 1000%, 0 -1000%)" }}
            ></div>
            <div
              className="absolute w-[40rem] h-[40rem] rounded-full bg-white  opacity-5 -z-[2] rotate-[-10deg]"
              style={{ clipPath: "polygon(50% 50%, 0 1000%, 0 -1000%)" }}
            ></div>

            <div className="w-[30rem] h-[30rem] rounded-full flex justify-center items-center shadow-2xl bg-white">
              <div className="w-[20rem] h-[20rem] rounded-full flex justify-center items-center shadow-2xl">
                <div className="w-[15rem] h-[15rem] rounded-full bg-white overflow-hidden">
                  <img src={ProductImage} alt="Product" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[15rem] bg-[#254d70] absolute -bottom-[22rem]">

      </div>
    </div>
  );
}

export default Footer;
