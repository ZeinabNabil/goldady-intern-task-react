import React from "react";

const SelectDropdown = ({ className, name, id, value, optionValue }) => {
  return (
    <>
      <select className={className} name={name} id={id}>
        <option value={value}>{optionValue}</option>
      </select>
    </>
  );
};

export default SelectDropdown;
