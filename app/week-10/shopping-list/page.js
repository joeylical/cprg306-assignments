"use client";
import { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import Meal from "./meal-ideas";
// Import the useUserAuth hook
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItems, delItems } from "../_services/shopping-list-service";


export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  if (user === null) {
    return (
      <>
      <script>
        window.location.href='/week-10';
      </script>
      </>
    );
  }
  let [sortBy, setSortBy] = useState('name');
  let [items, setItems] = useState([]);
  let [selected, select] = useState('');

  useEffect(()=>{
    async function getData() {
      const items = await getItems(user.uid);
      setItems(items);
    };
    getData();
  }, [user]);

  async function addItem(item) {
    const newitems = [item, ...items];
    await addItems(user.uid, item);
    setItems(newitems);
  }

  async function removeItem(item) {
    await delItems(user.uid, item);
    setItems(items.filter(it=>it.id!==item.id));
  }

  const firstWord = str => str.match(/[a-z ]+/)[0];

  const getClass = (cur, target) => cur===target?"bg-orange-500 text-white p-1 m-2 w-28":"bg-orange-700 text-white p-1 m-2 w-28";
  
  return (
    <main>
      <div className="flex">
      <div className="flex-1 max-w-sm m-2">
      <h1 className="capitalize text-xl">Shopping List</h1>
      <NewItem updater={addItem} />
      <div className="">
      <span>Sort By:</span>
        <button className={getClass(sortBy, "name")} onClick={()=>setSortBy('name')}>Name</button>
        <button className={getClass(sortBy, "category")} onClick={()=>setSortBy('category')}>Category</button>
    {/*<button className={getClass(sortBy, "group")} onClick={()=>setSortBy('group')} >Grouped Category</button>*/}
      </div>
      <ItemList itemArray={items} sortBy={sortBy} selector={item=>select(firstWord(item))} itemDeleter={removeItem} />
    </div>
    <div className="flex-1 max-w-sm m-2">
      <h1 className="capitalize text-xl">Meal Ideas</h1>
      <Meal ingredient={selected} />
    </div>
    </div>
    </main>
  );
}
