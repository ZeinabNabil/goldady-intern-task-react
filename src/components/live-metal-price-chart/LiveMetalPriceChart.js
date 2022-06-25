import React from "react";
import style from "../css/LiveMetal/LiveMetalPriceChart.module.css";
import GoldBox from "./GoldBox";
import PriceChart from "./PriceChart";

const LiveMetalPriceChart = () => {
  const goldPriceContainerList = [
    {
      header: "Buy",
      price: "EGP 980.00",
    },
    {
      header: "Sell",
      price: "EGP 970.00",
    },
    {
      header: "Daily Change Daily",
      price: "EGP 5.0",
    },
    {
      header: "Change",
      price: "0.1%",
    },
  ];
  return (
    <div className="boxes-container" style={{ border: "none" }}>
      <div className="row">
        <div className="col-lg-12" style={{ padding: "0" }}>
          <div className={style.live_metal_price_container}>
            <div className="row">
              <div className="col-lg-8">
                <div className={style.live_metal_price_header}>
                  <h4>Live Metal Prices</h4>
                </div>
              </div>
              <div className="col-lg-4" style={{ padding: "0" }}>
                <div className={style.live_metal_price_header}>
                  <div>
                    Market is open <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.live_metal_inside_box}>
              <GoldBox listOfObjects={goldPriceContainerList} haveNote={true} />
            </div>
          </div>
        </div>
        <div className="col-lg-12" style={{ padding: "0" }}>
          <div className={style.price_charts}>
            <PriceChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMetalPriceChart;
