import React from "react";
import style from "../css/LiveMetal/LiveMetalPriceChart.module.css";

const GoldBox = ({ listOfObjects, haveNote }) => {
  const renderedGoldList = listOfObjects.map((listItem) => {
    return (
      <div className={style.gold_price}>
        <div className={`${style.gold_price_content}`}>{listItem.header}</div>
        <div className={`${style.gold_price_content}`}>{listItem.price}</div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-lg-3">
        <div className={style.meta_name}>Gold</div>
      </div>
      <div className="col-lg-9">
        <div className={style.gold_price_container}>{renderedGoldList}</div>
        {haveNote ? (
          <div className={style.daily_change}>
            Daily Change = Difference from day before
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GoldBox;
