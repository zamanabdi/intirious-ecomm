import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  image,
  currprice,
  initialprice,
  discount,
  desc,
}) => {


const navigate = useNavigate();

  return (
    <div
    onClick={() => navigate(`/product/${5}`)}
      id={id}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover" src={image} alt="pic" />
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60 text-[20px]">{name}</p>
          <p>{desc}</p>
        </div>

        <div className="flex items-center space-x-2">
          <p className="font-semibold">₹{currprice}</p>
          <p className="line-through opacity-50">₹{initialprice}</p>
          <p className="text-green-600 font-semibold">{discount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
