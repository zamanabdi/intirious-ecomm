import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-lg py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
      {[1,1,1,1,1].map((item) => <Grid
        item
        container
        className="shadow-xl rounded-md p-5 border"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid item xs={6}>

          <div className="flex items-center space-x-5">
           <img className="w-[5rem] h-[5rem] object-cover object-bottom" src="https://m.media-amazon.com/images/I/81orA+t+QdL._SL1500_.jpg" alt="lamp"/>

           <div className="space-y-2 mt-2">
            <p className="font-semibold opacity-50">Homesake Wall Light Antique Home Decor Wall Lamp</p>
            <p className="font-semibold opacity-50"><b>Seller: </b>Intirious Design & Collection</p>
            <p className=" font-bold opacity-50 text-xl">₹850</p>
           </div>
          </div>
        </Grid>

        <Grid item>
        <Box sx={{color:"purple"}}>
        <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
        <span>Rate & Review Product</span>
         
        </Box>
        </Grid>


      </Grid>)}

        


      </Grid>
    </div>
  );
};

export default OrderDetails;
