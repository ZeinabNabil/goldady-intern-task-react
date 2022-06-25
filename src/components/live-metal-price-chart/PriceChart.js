import React from "react";
import style from "../css/LiveMetal/LiveMetalPriceChart.module.css";
import SelectDropdown from "../SelectDropdown";
import Chart from "./Chart";

const PriceChart = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={style.price_charts_header}>
          <h4>
            Price Charts: <span>Gold</span>
          </h4>
        </div>
      </div>
      <div className="col-lg-12">
        <Chart />
      </div>
      <div className="col lg-12">
        <div className={style.choose_how_often}>
          <SelectDropdown
            className={style.days_dropdown}
            name="days"
            id="days"
            value="day"
            optionValue="Day"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
