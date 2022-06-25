import React from "react";

const SpecialButtons = ({
  containerClassName,
  firstbtnClassName,
  firstBtnName,
  secondBtnClassName,
  secondBtnName,
}) => {
  return (
    <div className={containerClassName}>
      <button className={firstbtnClassName}>{firstBtnName}</button>
      <button className={secondBtnClassName}>{secondBtnName}</button>
    </div>
  );
};

export default SpecialButtons;
