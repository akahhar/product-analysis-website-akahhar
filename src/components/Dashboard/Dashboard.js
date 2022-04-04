import React from "react";
import IncomeChart from "./IncomeChart";
import LinesChart from "./LinesChart";
import TinyBarChart from "./TinyBarChart";
const Dashboard = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-xl-6">
          <IncomeChart />
        </div>
        <div className="col-xl-6">
          <TinyBarChart />
        </div>
        <div className="col-xl-6">
          <LinesChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
