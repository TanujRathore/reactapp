
import { toast } from 'react-toastify';
import './App.css';
import { useState } from 'react';
import {Medicineinfo, Foodrecipe, Specialistdoctors} from './components'


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





