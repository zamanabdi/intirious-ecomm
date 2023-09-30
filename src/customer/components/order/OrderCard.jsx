import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${12}`)} className="p-5 shadow-md hover:shadow-2xl">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {/* first grid */}
        <Grid item xs={5}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-contain object-top"
              src="https://m.media-amazon.com/images/I/91eCoP8BihL._SL1500_.jpg"
              alt="lights"
            />

            <div className="ml-5 space-y-2">
              <p className="">
                Vintage Rustic Wall Chimney Industrial Lamp Fixture Glass Shade
              </p>
              <p className="opacity-50 text-sm font-semibold">
                <b>Seller: </b>Intirious Design & Collection
              </p>
            </div>
          </div>
        </Grid>

        {/* second grid */}
        <Grid item xs={2}>
          <p>₹947</p>
        </Grid>

        {/* third grid */}
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>

              <p className="text-xs">
              Your Item Has Been Delivered
              </p>

            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery on Mar 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;