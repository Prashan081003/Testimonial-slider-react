import React from "react";
import Card from "./Card";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi"
import { useState } from "react";




const Testimonials=(props)=>{
    let reviews= props.reviews;
    const [index, setIndex] = useState(0);

    const leftShiftHandler = () => {
        index - 1 < 0 ? setIndex(reviews.length-1) : setIndex(index - 1);
    };

    const rightShiftHandler = () => {
        index + 1 >= reviews.length ? setIndex(0) : setIndex(index + 1);
    };

    const surpriceShiftHandler = () => {
        let surpriceIndex = Math.floor(Math.random() * reviews.length);
        console.log(surpriceIndex)
        setIndex(surpriceIndex);
    };
    
     return( 
        
        
        <div  className="flex flex-col items-center justify-center w-[85vw] md:w-[700px] bg-white hover:shadow-xl rounded-md transition-all duration-700 mt-10 p-10">
        <Card review={reviews[index]}></Card>


        <div className='text-3xl mt-10 gap-3 text-violet-400 font-bold'>
          <button className='cursor-pointer  hover:text-violet-500'
               onClick={leftShiftHandler}> 

               <FiChevronLeft/> </button>
            <button className='cursor-pointer  hover:text-violet-500'
            onClick={rightShiftHandler}>
                <FiChevronRight/> 
             </button>
      </div>
   
   <div className="mt-6">
    <button  onClick={surpriceShiftHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
        Suprise Me
    </button>
   </div>

        </div>
   
)
      

} 
export default Testimonials;