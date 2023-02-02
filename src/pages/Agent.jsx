import React from "react";
import MUIDataTable from "mui-datatables";
import CheckboxesTags from "../components/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import LoopIcon from '@mui/icons-material/Loop';

const Agent = () => {

  const fetchData = async () => {
    const response = await fetch('http://aviraspices.in/api/web/getAgent');
    const data = await response.json();
    console.log(data.data)
    return data;
  }

  const { data, status } = useQuery('data', fetchData);

  const columns = [
    "Agent Name",
    "Frenchaise",
    "City",
    "State",
    {
      label: "Action",
      options: {
        sort: false,
        export: false,
        filter: false,
        customBodyRender: () => {
          return (
            <div className="action-btn">
              <Link to="/agent/edit" style={{ textDecoration: "none" }}>
                <button>
                  <EditIcon sx={{ fontSize: 18 }} />
                </button>
              </Link>
              <button>
                <DeleteIcon sx={{ fontSize: 18 }} />
              </button>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <>
      {status === 'success' ?
        <div>
          <div className="table-head">
            <div className="task-tab">
              <p>Assign Task:</p>
              <div className="checkbox-franchise">
                <CheckboxesTags
                  label="Assign Task"
                  placeholder="Assign Your Task"
                  list={data}
                />
              </div>
              <div>
                <button className="main-btn">Assign</button>
              </div>
            </div>
            <div>
              <Link to="/franchise/trash" style={{ textDecoration: "none" }}>
                <button className="main-btn">Trash</button>
              </Link>

              <Link to="/agent/new" style={{ textDecoration: "none" }}>
                <button className="main-btn">New Agent</button>
              </Link>
            </div>
          </div>

          <div className="mi-table">
            <MUIDataTable
              title={"Agent List"}
              data={data.data.map((item, i) => (
                [item.name,item.referal_id ? data.data.find(o => o.agent_id === item.referal_id)?.name : '', item.city, item.state]
              ))}
            columns={columns}
            options={options}
            />
          </div>
        </div>
        : status === 'loading' ? (
          <div className="loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LoopIcon style={{fontSize:'5rem'}}/></div>
        ) : (
          <div className="loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Error!</div>
        )

      }
    </>
  );
}
export default Agent;
