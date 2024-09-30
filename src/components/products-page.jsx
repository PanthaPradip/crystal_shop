import React from "react";
import productImage from "../assets/product1.svg";
import SortIcon from "../assets/sortIcon.svg";

function ProductsPage() {
  const allProducts = [1, 2, 3, 4, 5, 6, 7, 8];
  const price = "18.99$";

  return (
    <div className="mt-10">
      <div className="flex justify-center items-center flex-col mb-10">
        <h1 className="text-[#31546d] text-5xl font-bold font-inter">All product</h1>
        <hr className="w-16 mt-7 h-1 bg-zinc-200" />
      </div>

      <div className="flex gap-[7rem] px-20">
        <div className="flex gap-4">
          <p className="text-zinc-400 font-semibold">Filter :</p>
          <p className="text-[#31546d] font-bold ">All Products</p>
          <img className="w-[0.7rem] mt-[0.3rem]" src={SortIcon}/>
        </div>
        <div className="flex gap-4">
          <p className="text-zinc-400 font-semibold">Sort :</p>
          <p className="text-[#31546d] font-bold">Best Selling</p>
          <img className="w-[0.7rem] mt-[0.3rem]" src={SortIcon}/>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 px-24 py-10">
        {allProducts.map((item, index) => (
          <div
            key={index}
            className="w-[18rem] h-[22rem] rounded-3xl flex flex-col justify-center items-center border-gray-100 border-[2px] hover:shadow-xl transition-all ease-in duration-150"
          >
            <div className="mb-4">
              <div>
                <img
                  src={productImage}
                  className="w-[12rem]"
                  alt="product img"
                />
              </div>
              <div className="text-center mb-4">
                <p className="text-slate-600">CRYSTAL AGATE PHONE GRIP</p>
                <p className="text-[#317189] font-bold">{price}</p>
              </div>
              <div className="text-center">
                <button className="border-[#9ad3f6] border-[3px] px-9 py-3 rounded-2xl text-sm font-semibold text-[#8cc4da] hover:bg-gradient-to-r from-[#74caed] to-[#70b8fc]  hover:shadow-2xl hover:shadow-[#74caed] hover:border-transparent hover:text-white transition-all ease-in duration-150">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-6 py-2 border-[#9ad3f6] border-[2px] rounded-2xl text-[#74caed] font-semibold">
          View All
        </button>
      </div>
    </div>
  );
}

export default ProductsPage;
