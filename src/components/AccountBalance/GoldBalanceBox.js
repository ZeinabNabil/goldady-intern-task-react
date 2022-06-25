import React from "react";
import style from "../css/AccountBalance/AccountBalance.module.css";

const GoldBalanceBox = ({ listOfObjects }) => {
  const renderedGoldBalanceList = listOfObjects.map((listItem) => {
    return (
      <div className={style.gold_balance}>
        <div
          className={`${style.gold_balance_content} ${style.gold_balance_header}`}
        >
          {listItem.header}
        </div>
        <div
          className={`${style.gold_balance_content} ${style.gold_buy_price}`}
        >
          {listItem.value}
        </div>
      </div>
    );
  });

  return (
    <div className={style.gold_balance_box}>
      <div className="row">
        <div className="col-lg-4">
          <div className={style.gold_balance}>Gold Balance</div>
        </div>
        <div className="col-lg-8">
          <div className={style.gold_balance_container}>
            {renderedGoldBalanceList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBalanceBox;
