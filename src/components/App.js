import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/App.css";
import LiveMetalPriceChart from "./live-metal-price-chart/LiveMetalPriceChart";
import InstantBuySell from "./InstantBuySell/InstantBuySell";
import AccountBalance from "./AccountBalance/AccountBalance";

const App = () => {
  return (
    <div className="internship-task">
      <div className="body-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <LiveMetalPriceChart />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <InstantBuySell />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <AccountBalance />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
