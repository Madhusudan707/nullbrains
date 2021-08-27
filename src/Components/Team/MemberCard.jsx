import React from "react";

export const MemberCard = ({imgSrc}) => {
  return (
    <div className='flex flex-col justify-center items-center relative p-4'>
      {/* <div class="rounded-full h-72 w-72 flex items-center justify-center bg-blue-500 z-10">
        <div class="rounded-full h-64 w-64 flex items-center justify-center bg-red-500 ">
        <img src="/images/team/t1.png" className="w-72 -top-1" alt="t1" />
        </div>
       
      </div> */}
      <div className=" flex items-center w-44  sm:w-60 sm:h-60 m-2 text-center  sm:my-3 ">
        <div className="p-5 bg-blue-300 rounded-l-full rounded-br-full">
        <div className="rounded-full bg-purple-300">
          <img src={imgSrc} className="rounded-full border" alt="t1" />
        </div>
      </div>
      </div>
    
      
     <div className='flex flex-col items-center  '>
        <p className=''>Freddy Smith</p>
        <p className='text-blue-300'>CEO and Founder</p>
        <div className='flex space-x-2'>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-github"></i>
        </div>
     </div>
    </div>
  );
};
