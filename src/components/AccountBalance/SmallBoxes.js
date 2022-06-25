import React from "react";
import style from "../css/AccountBalance/AccountBalance.module.css";

const SmallBoxes = ({ header, value, specialStyle }) => {
  return (
    <div className={style.account_balance_boxes}>
      <div className={style.account_balance_boxes_header}>{header}</div>
      <div className={style.account_balance_boxes_value} style={specialStyle}>
        {value}
      </div>
    </div>
  );
};

export default SmallBoxes;
