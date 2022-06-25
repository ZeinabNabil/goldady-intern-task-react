import React from "react";
import style from "../css/InstantBuySell/InstantBuySell.module.css";
import FormInput from "../FormInput";
import SelectDropdown from "../SelectDropdown";
import SpecialButtons from "../SpecialButtons";
import InstantBuySellForm from "./InstantBuySellForm";

const InstantBuySell = () => {
  return (
    <div className="boxes-container">
      <div className="row">
        <div className="col-lg-12">
          <div className={style.second_box_header}>
            <h4>Instant Buy & Sell</h4>
          </div>
          <SpecialButtons
            containerClassName={style.buy_sell_btns_container}
            firstbtnClassName={`${style.buy_sell_btns} ${style.clicked}`}
            firstBtnName="Buy"
            secondBtnClassName={style.buy_sell_btns}
            secondBtnName="Sell"
          />
          <div className={style.form_buy_sell}>
            <InstantBuySellForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantBuySell;
