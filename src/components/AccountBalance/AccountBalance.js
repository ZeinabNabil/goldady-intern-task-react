import React from "react";
import Navbar from "./Navbar";
import style from "../css/AccountBalance/AccountBalance.module.css";
import GoldBalanceBox from "./GoldBalanceBox";
import SmallBoxes from "./SmallBoxes";

const AccountBalance = () => {
  const goldBalanceList = [
    {
      header: "Available",
      value: "1350 gm",
    },
    {
      header: "Withdrawal",
      value: "EGP 92,275,00",
    },
    {
      header: "Totla",
      value: "100 gm",
    },
    {
      header: "Value",
      value: "10 gm",
    },
  ];
  return (
    <div className="boxes-container">
      <div className="row">
        <div className="col-lg-12">
          <Navbar />
        </div>
        <div className="col-lg-12">
          <GoldBalanceBox listOfObjects={goldBalanceList} />
        </div>
        <div className="col-lg-12">
          <SmallBoxes
            header="Cash Balance"
            value="EGY 100,000.00"
            specialStyle={{ fontWeight: "bold" }}
          />
        </div>
        <div className="col-lg-12">
          <SmallBoxes header="Unrealized P/L" value="EGY 950,024.00" />
        </div>
        <div className="col-lg-12">
          <SmallBoxes header="Funds in Withdrawal" value="EGP 950,024.00" />
        </div>
        <div className="col-lg-12">
          <SmallBoxes header="Portfolio Value" value="EGP 90,183" />
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
