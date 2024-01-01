import { useState } from "react";
import { toast } from 'react-toastify';
import React from "react";

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

  export default Specialistdoctors;