import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';


const CartDropdown = ({ items }) => {
    const totalPrice = items.reduce((acc, item) => acc + (item.price), 0);
    const medicineCount = items.reduce((acc, item) => {
      // If the item already exists in the accumulator, increase its count
      if (acc[item.medname]) {
        acc[item.medname] += 1;
      } else {
        // Otherwise, initialize it with its quantity
        acc[item.medname] = 1;
      }
      return acc;
    }, {});
  
    const medicineList = Object.entries(medicineCount).map(([name, details]) => ({
      medname: name,
      count: details.count,
      price: details.price
    }));
  
    return (
      <div className='relative'>
        <div className="dropdown overflow-scroll">
          <ul>
            {medicineList.map((element, index, quantity) => (
              <li key={index} style={{ color: 'blue' }} className='items'>
                <div>Name: {element.medname}</div>
                <div>price: {element.price}</div>
                <div>count: {medicineCount[element.medname]}</div>
  
              </li>
            ))}
          </ul>
          <div>{items.length}</div>
          <div className="total-price">
            Total: ${totalPrice.toFixed(2)}
            <button className='paybutton'>pay</button>
          </div>
        </div>
      </div>
    );
  };
  
  function Medicineinfo({ medicines }) {
    const [showmedicine, Setmedicine] = useState(false);
    const [searchmedicine, Setsearchmedicine] = useState("");
    const [buy, Setbuy] = useState([]);
    const [cartItems, SetcartItems] = useState(false);
    const [dropdown, Setdropdown] = useState(false);
  
    const handleClick = () => {
      Setmedicine(!showmedicine);
    }
    const handlechange = (e) => {
      e.preventDefault();
      Setsearchmedicine(e.target.value);
    }
  
    const handleBuyClick = (i) => {
      const newbuy = [...buy];
      newbuy.push(medicines[i]);
      Setbuy(newbuy);
      toast.success('Added to cart');
    }
  
    const handleCartClick = () => {
      Setdropdown(!dropdown);
      SetcartItems(!cartItems);
      // YET TO IMPLEMENT THE LOGIC TO SHOW THE CART ITEMS//
    }
  
    const handleClearCartClick = () => {
      Setbuy([]);
      toast.warning('cart cleared');
    }
  
  
    const filtermedicine = medicines.filter(
      (element) =>
        element.issue.toLowerCase().includes(searchmedicine.toLowerCase())
    );
  
    const medicineList = showmedicine && (
      <ul className="space-y-4 overflow-scroll lg:h-[32rem] ">
        <div className='flex justify-center items-center'>
          <input
            type="text"
            placeholder="Search issue"
            value={searchmedicine}
            onChange={handlechange}
            className="border rounded px-2 py-1 border-black"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 
      text-white font-bold py-2 px-4 m-3 rounded "
            onClick={handleCartClick}
          >
            Cart
          </button>
          {dropdown && <CartDropdown items={buy} />}
          <button
            className="bg-red-500 hover:bg-red-700 
      text-white font-bold py-2 px-4 m-3 rounded"
            onClick={handleClearCartClick}
          >
            Clear Cart
          </button>
        </div>
        {filtermedicine.map((element, index) => (
          <div key={index} className="border rounded p-4 flex 
      justify-center items-center lg:w-[38rem] m-auto ">
            <li className="text-blue-500 items align-baseline">
              <div className=''>
                <div className="font-semibold">Name: {element.medname}</div>
                <div>Issue: {element.issue}</div>
                <div>Price: {element.price}</div>
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white 
            font-bold py-1 px-2 rounded mt-2 "
                onClick={() => { handleBuyClick(index) }}
              >
                Buy Now
              </button>
            </li>
          </div>
        ))}
      </ul>
    );
  
    return (
      <>
        <div className="mt-4">
          <div className='flex justify-center items-center px-2 py-2 m-1'>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              {showmedicine ? 'Hide medicine' : 'Show medicine'}
            </button>
          </div>
          {medicineList}
        </div>
      </>
    );
  }

export default  Medicineinfo;