import React from "react";

export const BoostProductivity = () => {
  return (
    <div className="flex items-center justify-center space-x-16">
      <div>
        <img src="/images/boost_productivity.png" alt="boost" />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-3xl mb-4">Boost Productivity</h2>
        <div className="mb-8 text-gray-600">
          <p>Build an atmosphere that creates productivity in</p>
          <p>your organization and your company culture.</p>
        </div>

        <div className="flex flex-col space-y-3 text-gray-500">
          <div className="flex items-center">
            <span>
              <i className="bg-yellow-500 p-1  text-white fas fa-seedling rounded-full  flex items-center justify-center border"></i>
            </span>
            <span className="  px-2">Maximize productivity and growth</span>
          </div>
          <div className="flex items-center">
            <span>
              <i className="bg-yellow-500 p-1  text-white fas fa-tachometer-alt rounded-full  items-center justify-center border"></i>
            </span>
            <span className="  px-2">Speed past your competition</span>
          </div>
          <div className="flex items-center">
            <span>
              <i className="bg-yellow-500 p-1  text-white fas fa-graduation-cap rounded-full  flex items-center justify-center border"></i>
            </span>
            <span className=" px-2">Learn the top techniques</span>
          </div>
        </div>
      </div>
    </div>
  );
};
