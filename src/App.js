
import { toast } from 'react-toastify';
import './App.css';
import { useState } from 'react';


const doctors = [
  {
    name: 'Dr. keshav myurya',
    specialist: "Child",
    mob: '+91-XXXXXXX12'
  },
  {
    name: 'Dr. Trend boult',
    specialist: 'ENT',
    mob: '+91-XXXXXXX13'
  },
  {
    name: 'Dr. Pat cummins',
    specialist: 'Homopathic',
    mob: '+91-XXXXXXX14'
  },
  {
    name: 'Dr. Tim paine',
    specialist: 'Cardiologists',
    mob: '+91-XXXXXXX15'
  },
  {
    name: 'Dr. XYZABC',
    specialist: "Family Physicians",
    mob: '+91-XXXXXXX16'
  },
  {
    name: 'Dr. Hansraj Hathi',
    specialist: "Infectious Disease Specialists",
    mob: '+91-XXXXXXX17'
  }
];

const medicines = [
  {
    medname: 'paracetamol',
    issue: 'for fever,cold, headache ',
    price: 100
  },
  {
    medname: 'mercitol',
    issue: 'headache, sugar, cold',
    price: 200
  },
  {
    medname: 'apolo789',
    issue: 'Blood Pressure, joints pain',
    price: 300
  },
  {
    medname: 'neutron',
    issue: 'energy drink, weakness, dizzy',
    price: 80
  },
  {
    medname: 'proton',
    issue: 'energy drink, weakness, dizzy',
    price: 80
  },
  {
    medname: 'electron',
    issue: 'energy drink, weakness, dizzy',
    price: 80
  }


];

// const recipe = [
//   {
//     recipename: 'dal chaval',
//     steps: "1.2.3"
//   }
// ];

const recipe = [
  {
    recipename: 'Pasta',
    steps: [
      'Fill a large pot with water and bring to a boil.',
      'Add a pinch of salt and the pasta.',
      'Cook the pasta for 8-10 minutes until al dente.',
      'Drain the pasta and mix in your favorite sauce.'
    ],
    time: '30 minutes'
  },
  {
    recipename: 'Sandwich',
    steps: [
      'Take two slices of bread.',
      'Spread your choice of condiments on one slice.',
      'Layer your favorite fillings like lettuce, tomato, and cheese.',
      'Top with the second slice of bread.'
    ],
    time: '10 minutes'
  },
  {
    recipename: 'Stir-Fry Vegetables',
    steps: [
      'Chop a variety of your favorite vegetables.',
      'Heat oil in a pan and add the vegetables.',
      'Stir-fry for 5-7 minutes and season as desired.',
      'Serve hot as a side dish or over rice for a meal.'
    ],
    time: '15 minutes'
  },
  {
    recipename: 'Omelette',
    steps: [
      'Beat 2 eggs with salt, pepper, and herbs.',
      'Pour into a hot, oiled frying pan.',
      'Cook until set, then fold in half and serve.'
    ],
    time: '10 minutes'
  },
  {
    recipename: 'Smoothie Bowl',
    steps: [
      'Blend your choice of fruits with yogurt or milk.',
      'Pour into a bowl and top with nuts, seeds, and granola.'
    ],
    time: '5 minutes'
  },
  {
    recipename: 'Quesadilla',
    steps: [
      'Place a tortilla in a pan, sprinkle cheese on half.',
      'Add fillings like cooked chicken, beans, or vegetables.',
      'Fold over and cook until cheese melts and tortilla is crispy.'
    ],
    time: '15 minutes'
  },
  {
    recipename: 'Grilled Cheese',
    steps: [
      'Butter two slices of bread.',
      'Place cheese between the bread and grill in a pan until golden brown.'
    ],
    time: '10 minutes'
  },
  {
    recipename: 'Salad Wrap',
    steps: [
      'Mix lettuce, tomato, cucumber, and your choice of protein.',
      'Place the mixture on a tortilla and wrap tightly.'
    ],
    time: '10 minutes'
  },
  {
    recipename: 'Baked Potato',
    steps: [
      'Pierce a potato with a fork and microwave for 5 minutes.',
      'Cut open, fluff with a fork, and add toppings like cheese, sour cream, and chives.'
    ],
    time: '10 minutes'
  },
  {
    recipename: 'Pancakes',
    steps: [
      'Mix pancake batter according to package instructions.',
      'Pour onto a hot griddle and cook until bubbles form, then flip and cook until golden.'
    ],
    time: '20 minutes'
  }
  // ... more recipes
];


function Specialistdoctors({ doctors }) {
  const [showdoctors, Setshowdoctors] = useState(false);
  const [searchTerm, SetsearchTerm] = useState("");

  const handleClick = () => {
    Setshowdoctors(!showdoctors);
  }

  const handlechange = (e) => {
    e.preventDefault();
    SetsearchTerm(e.target.value);
  }


  const filteredoctors = doctors.filter(
    (element) =>
      element.specialist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const doctorList = showdoctors && (
    <ul className="space-y-4 overflow-auto h-[25rem] ">
      <div className="input flex justify-center items-center">
        <input
          type="text"
          placeholder="Search specialty"
          value={searchTerm}
          onChange={handlechange}
          className="border rounded px-2 py-1 border-black"
        />
      </div>
      {filteredoctors.map((element, index) => (
        <li key={index} className="text-blue-500 items border rounded p-2 flex 
      m-auto lg:w-[38rem] justify-center items-center flex-col ">
          <div className="font-semibold">Name: {element.name}</div>
          <div>Specialist: {element.specialist}</div>
          <div>Mobile: {element.mob}</div>
        </li>
      ))}
    </ul>
  );


  return (
    <>

      <div className="mt-4 ">
        <div className='flex justify-center items-center px-2 py-2 m-2'>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center "
            onClick={handleClick}
          >
            {showdoctors ? 'Hide Doctors' : 'Show Doctors'}
          </button>
        </div>
        {doctorList}
      </div>
    </>
  );
}

function CartElement({ buy }) {
  return (
    <>
      <div className="mt-4">
        <ul className="space-y-4">
          {buy.map((element, index) => (
            <li key={index} className="text-blue-500 items border rounded p-2">
              <div className="font-semibold">Name: {element.medname}</div>
              <div>Issue: {element.issue}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

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

export default function App() {

  return (
    <>
      {/* <img style={{
            resizeMode: 'cover',
            borderBottomRightRadius: 20,
            borderColor: 'blue',
            borderWidth: 5,
          }} src={logo} alt="Logo" /> */}

      <h2 className="text-blue-500 text-center mt-4 mb-8 text-3xl font-semibold">
        This is a website for doctors, food recipes and medicines
      </h2>
      <Specialistdoctors doctors={doctors} />
      <Foodrecipe recipe={recipe} />
      <Medicineinfo medicines={medicines} />
    </>
  );
}


// to implement payment gateway: razorpay
/*
import React, { useState } from 'react';
import Razorpay from 'razorpay'; // Import Razorpay

function Medicineinfo({ medicines }) {
  const [showmedicine, Setmedicine] = useState(false);
  const [searchmedicine, Setsearchmedicine] = useState("");

  const handleClick = () => {
    Setmedicine(!showmedicine);
  };

  const handlechange = (e) => {
    e.preventDefault();
    Setsearchmedicine(e.target.value);
  };

  const handleBuyClick = async (medicine) => {
    // Call the function to initiate the payment process
    await initiatePayment(medicine);
  };

  const filtermedicine = medicines.filter(
    (element) =>
      element.issue.toLowerCase().includes(searchmedicine.toLowerCase())
  );

  const medicineList = showmedicine && (
    <ul>
      <input
        type="text"
        placeholder="Search issue"
        value={searchmedicine}
        onChange={handlechange}
      />
      {filtermedicine.map((element, index) => (
        <li key={index}>
          <div>Name: {element.medname}</div>
          <div>Issue: {element.issue}</div>
          <button onClick={() => handleBuyClick(element)}>Buy Now</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <button className='content' onClick={handleClick}>
        {showmedicine ? 'Hide Medicine' : 'Show Medicine'}
      </button>
      {medicineList}
    </div>
  );
}

// Payment Integration Logic
const initiatePayment = async (medicine) => {
  // Define Razorpay options
  const options = {
    key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
    amount: medicine.price * 100, // Amount is in the smallest currency unit
    currency: 'INR',
    name: 'Medicine Purchase',
    description: `Buying ${medicine.medname}`,
    handler: function (response) {
      // Handle payment success
      alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
    },
    prefill: {
      name: 'Your Name',
      email: 'youremail@example.com',
      contact: '1234567890'
    },
    notes: {
      medicineId: medicine.id
    },
    theme: {
      color: '#3399cc'
    }
  };

  const rzp1 = new Razorpay(options);
  rzp1.open();
};

export default Medicineinfo;

 */







