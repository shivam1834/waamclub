import React from 'react'
import MUIDataTable from "mui-datatables";
import CheckboxesTags from "../components/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const VendorProduct = () => {
    const columns = [
        "Product Name",
        "Type",
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
    
      const data = [
        { title: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        {
          title: "John Walsh",
          company: "Test Corp",
          city: "Hartford",
          state: "CT",
        },
        { title: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        {
          title: "James Houston",
          company: "Test Corp",
          city: "Dallas",
          state: "TX",
        },
        { title: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        {
          title: "John Walsh",
          company: "Test Corp",
          city: "Hartford",
          state: "CT",
        },
        { title: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        {
          title: "James Houston",
          company: "Test Corp",
          city: "Dallas",
          state: "TX",
        },
      ];
    
      const options = {
        filterType: "checkbox",
      };
  return (
    <div>
      <div className="table-head">
        <div className="task-tab">
          <p>Product Task:</p>
          <div className="checkbox-franchise">
            <CheckboxesTags
              label="Product Task"
              placeholder="Product Your Task"
              list={data}
            />
          </div>
          <div>
            <button className="main-btn">Product</button>
          </div>
        </div>
        <div>
          <Link to="/franchise/trash" style={{ textDecoration: "none" }}>
            <button className="main-btn">Trash</button>
          </Link>

          <Link to="/vendor/product/add" style={{ textDecoration: "none" }}>
            <button className="main-btn">New Product</button>
          </Link>
        </div>
      </div>

      <div className="mi-table">
        <MUIDataTable
          title={"Product List"}
          data={data.map((data, i) => {
            return [data.title, data.company, data.city, data.state];
          })}
          columns={columns}
          options={options}
        />
      </div>
    </div>
  )
}

export default VendorProduct