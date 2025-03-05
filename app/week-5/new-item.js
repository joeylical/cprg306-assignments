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

const quantityDefault = 1;
const nameDefault = '';
const categoryDefault = 'Produce';

const categories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other"
];

export default function NewItem() {
  let [quantity, setQuantity] = useState(quantityDefault);
  let [name, setName] = useState(nameDefault);
  let [category, setCategory] = useState(categoryDefault);

  const handleSubmition = (event) => {
    event.preventDefault();
    const item = {
      name: name,
      category: category,
      quantity: quantity,
    };
    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);
    setQuantity(quantityDefault);
    setName(nameDefault);
    setCategory(categoryDefault);
  };
  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmition} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
        <div className="mb-2">
        <input name="name" type="text" className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans" placeholder="Item name" value={name} onChange={(e)=>setName(e.target.value)} />
        <div className="flex justify-between">
          <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
            <div className="flex justify-between">
              <span className="text-black">{quantity}</span>
              <div className="flex">
                <button className={buttonClassName} disabled={quantity>=20} onClick={()=>increment(quantity, setQuantity)} >+</button>
                <button className={buttonClassName} disabled={quantity<=1} onClick={()=>decrement(quantity, setQuantity)} >-</button>
              </div>
            </div>
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="ml-1 mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          >
          {categories.map(item=>(<option key={item} value={item}>{item}</option>))}
          </select>
        </div>
        <button className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit">+</button>
        </div>
      </form>
    </div>
  );
}
