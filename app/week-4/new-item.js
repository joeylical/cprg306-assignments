"use client";
import { useState } from "react";

function increment(v, setV) {
  if (v < 20) {
    setV(v + 1);
  }
}

function decrement(v, setV) {
  if (v > 1) {
    setV(v - 1);
  }
}

const buttonClassName = "w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75";

export default function NewItem() {
  let [quantity, setQuantity] = useState(1);
  return (
    <div className="w-full flex justify-center">
      <div className="gap-3 flex justify-between">
        <span className="w-10 text-black">{quantity}</span>
        <button className={buttonClassName} disabled={quantity>=20} onClick={()=>increment(quantity, setQuantity)} >+</button>
        <button className={buttonClassName} disabled={quantity<=1} onClick={()=>decrement(quantity, setQuantity)} >-</button>
      </div>
    </div>
  );
}
