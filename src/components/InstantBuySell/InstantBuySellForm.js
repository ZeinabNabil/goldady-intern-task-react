import React from "react";
import style from "../css/InstantBuySell/InstantBuySell.module.css";
import FormInput from "../FormInput";
import SelectDropdown from "../SelectDropdown";
import SpecialButtons from "../SpecialButtons";

const InstantBuySellForm = () => {
  return (
    <>
      <form>
        <div className={style.form_dropdown}>
          <SelectDropdown
            className={style.form_select}
            name="metal"
            id="metal"
            value="gold"
            optionValue="Gold"
          />
        </div>
        <FormInput
          className={style.form_inputs}
          labelName="Quantity"
          value="123gm"
        />
        <div className={style.dropdown_input_container}>
          <div className={`${style.dropdown_input} ${style.form_dropdown}`}>
            <SelectDropdown
              className={style.form_select}
              name="metal"
              id="metal"
              value="gold"
              optionValue="Gold"
            />
          </div>
          <FormInput
            className={`${style.dropdown_input} ${style.form_inputs}`}
            labelName="Price Limit"
            value="EGP0.00"
            labelClassName={style.price_limit_label}
          />
        </div>

        <FormInput
          className={`${style.order_value_input} ${style.form_inputs}`}
          labelName="Order Value Summary"
          value="0000000"
          styleFormInput={{ backgroundColor: "#464545" }}
        />
        <SpecialButtons
          containerClassName={style.reset_preview_container}
          firstbtnClassName={`${style.reset_preview_btns} ${style.reset_btn}`}
          firstBtnName="Reset"
          secondBtnClassName={`${style.reset_preview_btns} ${style.preview_btn}`}
          secondBtnName="Preview"
        />
      </form>
    </>
  );
};

export default InstantBuySellForm;
