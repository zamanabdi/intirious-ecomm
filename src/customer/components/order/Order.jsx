import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  {
    label: "On The Way",
    value: "on_the_way",
  },
  {
    label:"Delivered",value:"delivered"
  },
  {
    label:"Cancelled",value:"cancelled"
  },
  {
    label:"Returned",value:"returned"
  }
];

const Order = () => {
  return (
    <div className="px-5 lg:px-20 ">
      <div className="md:flex md:justify-between">

      {/* first item */}
        <div className="w-full md:w-[20%]">
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>

            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {
                orderStatus.map((option) => <div className="flex items-center">
                <input defaultValue={option.value} type="checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
 
                <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                {
                 option.label
                }
                </label>
 
               </div>)
              }


            </div>


          </div>
        </div>


        {/*second item */}
        <div className="border border-red-800 w-[full] md:w-[75%]">
        <div className="space-y-5 flex flex-col justify-center items-center md:block">
        {
          [1,1,1,1].map((item) => <OrderCard/>)
         }
        </div>
               
        
        </div>
      </div>
    </div>
  );
};

export default Order;
