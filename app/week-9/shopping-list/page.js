"use client";
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemArray from './items.json';
import Meal from "./meal-ideas";
// Import the useUserAuth hook
import { useUserAuth } from "../_utils/auth-context";


export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  if (user === null) {
    return (
      <>
      <script>
        window.location.href='/week-9';
      </script>
      </>
    );
  }
  let [sortBy, setSortBy] = useState('name');
  let [items, setItems] = useState(itemArray);
  let [selected, select] = useState('');

  const firstWord = str => str.match(/[a-z ]+/)[0];

  const getClass = (cur, target) => cur===target?"bg-orange-500 text-white p-1 m-2 w-28":"bg-orange-700 text-white p-1 m-2 w-28";
  
  return (
    <main>
      <div className="flex">
      <div className="flex-1 max-w-sm m-2">
      <h1 className="capitalize text-xl">Shopping List</h1>
      <NewItem updater={item=>setItems([item, ...items])} />
      <div className="">
      <span>Sort By:</span>
        <button className={getClass(sortBy, "name")} onClick={()=>setSortBy('name')}>Name</button>
        <button className={getClass(sortBy, "category")} onClick={()=>setSortBy('category')}>Category</button>
    {/*<button className={getClass(sortBy, "group")} onClick={()=>setSortBy('group')} >Grouped Category</button>*/}
      </div>
      <ItemList itemArray={items} sortBy={sortBy} selector={item=>select(firstWord(item))} />
    </div>
    <div className="flex-1 max-w-sm m-2">
      <h1 className="capitalize text-xl">Meal Ideas</h1>
      <Meal ingredient={selected} />
    </div>
    </div>
    </main>
  );
}
