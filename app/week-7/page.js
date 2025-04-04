"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemArray from './items.json';


export default function Home() {
  let [sortBy, setSortBy] = useState('name');
  let [items, setItems] = useState(itemArray);

  const getClass = (cur, target) => cur===target?"bg-orange-500 text-white p-1 m-2 w-28":"bg-orange-700 text-white p-1 m-2 w-28";
  
  return (
    <main>
      <h1 className="capitalize text-xl">Shopping List</h1>
      <NewItem updater={item=>setItems([item, ...items])} />
      <div className="">
      <span>Sort By:</span>
        <button className={getClass(sortBy, "name")} onClick={()=>setSortBy('name')}>Name</button>
        <button className={getClass(sortBy, "category")} onClick={()=>setSortBy('category')}>Category</button>
    {/*<button className={getClass(sortBy, "group")} onClick={()=>setSortBy('group')} >Grouped Category</button>*/}
      </div>
      <ItemList itemArray={items} sortBy={sortBy} />
    </main>
  );
}
