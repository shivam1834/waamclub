import React from "react";
import BarChart from "../components/Chart/BarChart";
import PopChart from "../components/Chart/PopChart";
import PieChart from "../components/Chart/PieChart";
import RadialChart from "../components/Chart/RadialChart";
import Card from "../components/Card";
import Paper from "@mui/material/Paper";
import { FiBarChart2 } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { MdTaskAlt } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";

const Dashboard = () => {
  return (
    <div>
      <div className="dash-card">
        <Card title="Earnings" amount="$350.4" icon={<FiBarChart2 />} />
        <Card
          title="Spend this month"
          amount="$642.39"
          icon={<BsCurrencyDollar />}
        />
        <Card title="Sales" amount="$574.34" icon={<BsGraphUp />} />
        <Card
          title="Your balance"
          amount="$1,000"
          icon={<BsCurrencyDollar />}
        />
        <Card title="New Tasks" amount="154" icon={<MdTaskAlt />} />
        <Card title="Total Projects" amount="2937" icon={<ImFilesEmpty />} />
      </div>
      <div className="chart-area">
        <Paper elevation={1}>
          <div className="graph">
            <PopChart />
          </div>
        </Paper>
        <Paper elevation={1}>
          <div className="graph">
            <BarChart />
          </div>
        </Paper>
      </div>
      <div>
        <Paper className="graph-2">
          <div></div>
          <div>
            <PieChart />
          </div>
          <div>
            <RadialChart />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
