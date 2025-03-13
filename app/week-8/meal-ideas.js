"use client";

import { useEffect, useState } from "react";
import range from "../range";

const wrapMeasure = (item) => item && item.trim().length>0?` (${item})`:'';

const getIngredients = mealDetailObj => range(1, 21).map(i=>mealDetailObj[`strIngredient${i}`]+wrapMeasure(mealDetailObj[`strMeasure${i}`])).filter(line=>line.length>0);

function MealIdeas({mealItem, focused, selector}) {
  let [mealDetail, setMealDetail] = useState('');
  useEffect(()=>{
    async function fetchMealDetail() {
      const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.idMeal}`);
      const jsonObj = await resp.json();
      setMealDetail(getIngredients(jsonObj.meals[0]));
    }
    if (mealItem.idMeal === focused)
      fetchMealDetail();
  }, [mealItem, focused]);
  return (
    <li className="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer text-sky-100" onClick={()=>selector(mealItem.idMeal)}>
      {mealItem.strMeal}
      {(focused === mealItem.idMeal)?
          <div className="text-xs text-gray-400 ml-2">
            Ingredients needed:
            {mealDetail?mealDetail.map(line=><ul key={line} className="text-xs ml-6 text-gray-400">{line}</ul>):<></>}
          </div>:<></>}
    </li>
  );
}

export default function Meal({ingredient}) {
  let [meals, setMeals] = useState([]);
  let [selected, select] = useState('unselected');

  useEffect( () => {
    async function fetchData() {
      if (ingredient && ingredient.length > 0) {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const jsonObj = await resp.json();
        setMeals(jsonObj.meals);
      } else {
        setMeals([]);
      }
    }
    fetchData();
  }, [ingredient]);

  return (
    <main>
      {ingredient?
        (meals?
          (<ul>
            {meals.map(meal=><MealIdeas key={meal.idMeal} mealItem={meal} focused={selected} selector={select} />)}
           </ul>)
          :
          (<span>
            No meal ideas found for {ingredient}
           </span>))
        :
        (<span>
          Select an item to see meal ideas
        </span>)}
    </main>);
}

