import React, { useState } from 'react';
import Svg from './Components/Svg';
import './App.css';


export default function({handlesubmit,handleclick,rating }) {
  
 return (
    <div className='container-lg flex justify-center items-center bg-verydarkblue h-screen'>
      <div className='w-[400px] bg-darkblue rounded '>
        <Svg />
        <div className="flex justify-between w-[80%] mx-auto mt-[20px] mb-[10px]">
          <button className={`btn ${rating==1?"active":"bg-button"}`} name="1"   onClick={handleclick}>1</button>
          <button className={`btn ${rating==2?"active":"bg-button"}`} name="2"   onClick={handleclick}>2</button>
          <button className={`btn ${rating==3?"active":"bg-button"}`} name="3"   onClick={handleclick}>3</button>
          <button className={`btn ${rating==4?"active":"bg-button"}`} name="4"   onClick={handleclick}>4</button>
          <button className={`btn ${rating==5?"active":"bg-button"}`} name="5"   onClick={handleclick}>5</button>
        </div >
        <button type='submit' className='submit-button flex justify-center items-center w-[95%] mx-auto h-[30px] rounded mt-[20px] mb-[10px] hover:outline hover:outline-blue-500 ease duration-150' onClick={handlesubmit}>Submit</button>
        
      </div>
    </div>
  
  )
}
