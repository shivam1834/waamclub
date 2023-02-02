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
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Popup from "../components/Popup";

const VendorDashboard = () => {
  const [ButtonPopup, setButtonPopup] = React.useState(false);
  const [addmoney, setAddmoney] = React.useState(1000);

  const addMoreMoney = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = Object.fromEntries(data.entries());
    const total = +user.amount + addmoney;
    setAddmoney(total);
    setButtonPopup(false);
  }

  return (
    <div>
      <Popup
          trigger={ButtonPopup}
          setTrigger={setButtonPopup}
          data={addmoney}
          setAddmoney={setAddmoney}
          className="Popup"
        >
          <div className="popup-inner">
          <h1>Your Balance : ${addmoney}</h1>
          <Box
              component="form"
              onSubmit={addMoreMoney}
              noValidate
            >
          <TextField fullWidth id="outlined-basic" name="amount" label="Amount you want to add" variant="outlined"/>
          <div>
              <button className="main-btn" type="submit">Add</button>
          </div>
          </Box>
          </div>
      </Popup>
      <div className="dash-card">
        <Card title="Earnings" amount="$350.4" icon={<FiBarChart2 />} />
        <Card
          title="Spend this month"
          amount="$642.39"
          icon={<BsCurrencyDollar />}
        />
        <Card title="Sales" amount="$574.34" icon={<BsGraphUp />} />
        <Card
          title={`Your balance`}
          amount={`$`+addmoney}
          icon={<BsCurrencyDollar />}
        />
        <Card title="New Tasks" amount="154" icon={<MdTaskAlt />} />
        <Card title="Total Projects" amount="2937" icon={<ImFilesEmpty />} />
        <button onClick={() => setButtonPopup(!ButtonPopup)}>Add Balance</button>
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

export default VendorDashboard;
