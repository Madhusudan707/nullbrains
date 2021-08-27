import React from "react";

export const MemberCard = () => {
  return (
    <div className='flex flex-col justify-center items-center relative'>
      <div class="rounded-full h-72 w-72 flex items-center justify-center bg-blue-500 z-10">
        <div class="rounded-full h-64 w-64 flex items-center justify-center bg-red-500 ">
        <img src="/images/team/t1.png" className="w-72 -top-1" alt="t1" />
        </div>
       
      </div>
     <div className='flex flex-col items-center space-y-2 '>
        <p className='mt-4'>Freddy Smith</p>
        <p className='text-blue-300'>CEO and Founder</p>
        <div className='flex space-x-2'>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-github"></i>
        </div>
     </div>
    </div>
  );
};
