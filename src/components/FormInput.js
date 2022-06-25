import React from "react";
import style from "./css/InstantBuySell/InstantBuySell.module.css";

const FormInput = ({
  className,
  labelName,
  value,
  styleFormInput,
  labelClassName,
}) => {
  return (
    <div className={className}>
      <label className={`${style.form_label} ${labelClassName}`}>
        {labelName}
      </label>
      <input
        type="text"
        className={`${style.form_control} ${style.form_input}`}
        value={value}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        style={styleFormInput}
      />
    </div>
  );
};

export default FormInput;
