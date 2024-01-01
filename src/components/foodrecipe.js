import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
// import useCustomHook from '.src/hooks/useCustomHook';
 
function Foodrecipe({ recipe }) {
    const [showrecipe, Setrecipe] = useState(false);
    const [searchrecipe, Setsearchrecipe] = useState("");
    const handleClick = () => {
      Setrecipe(!showrecipe);
    }
  
    const handlechange = (e) => {
      e.preventDefault();
      Setsearchrecipe(e.target.value);
    }
  
  
    const filtererecipe = recipe.filter(
      (element) =>
        element.recipename.toLowerCase().includes(searchrecipe.toLowerCase())
    );
  
    const recipeList = showrecipe && (
      <ul className="space-y-4 overflow-y-scroll lg:h-[22rem] w-50">
        <div className='flex justify-center items-center '>
          <input
            type="text"
            placeholder="Search recipename"
            value={searchrecipe}
            onChange={handlechange}
            className="border rounded px-2 py-1 border-black"
          />
        </div>
  
        {filtererecipe.map((element, index) => (
          <li key={index} className="border rounded p-4 lg:w-[33rem] m-auto">
            <div className="text-blue-500 font-semibold flex 
        justify-center items-center ">Name: {element.recipename}</div>
            <div className='flex flex-col justify-center items-center'>
              <ul className="list-disc align-baseline">
                {element.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <div className='mt-4'>Time Required: {element.time}</div>
            </div>
  
          </li>
        ))}
      </ul>
    );
    return (
      <>
        <div className="mt-4">
          <div className='flex justify-center items-center 
          px-2 py-2 m-1'>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              {showrecipe ? 'Hide recipe' : 'Show recipes'}
            </button>
          </div>
          {recipeList}
        </div>
  
      </>
    );
  }

  export default Foodrecipe;
  