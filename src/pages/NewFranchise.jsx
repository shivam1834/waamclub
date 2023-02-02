import { Paper } from "@mui/material";
import React from "react";
import CheckboxesTags from "../components/Checkbox";

function NewFranchise() {
  return (
    <Paper>
      <div className="basic-info">
        <div>
          <div className="personal">
            <h2>Personal Details</h2>
            <p>Name</p>
            <input className="basic-input" />
            <p>Father/Mother Name</p>
            <input className="basic-input" />
            <p>Contact Number</p>
            <input className="basic-input" />
            <p>Date of Birth</p>
            <input type={"date"} className="basic-input" />
            <p>User Name</p>
            <input className="basic-input" />
            <p>Password</p>
            <input className="basic-input" />
          </div>
          <div>
            <h2>Professional Details</h2>
            <p>Company Name</p>
            <input className="basic-input" />
            <p>Year of Expreance</p>
            <input className="basic-input" />
            <p>Date of Joining</p>
            <input type={"date"} className="basic-input" />
          </div>
        </div>
        <div>
          <div>
            <h2>Bank Details</h2>
            <p>Bank Name</p>
            <input className="basic-input" />
            <p>Branch</p>
            <input className="basic-input" />
            <p>Account Number</p>
            <input className="basic-input" />
            <p>IFSC Code</p>
            <input className="basic-input" />
            <p>UPI Number</p>
            <input className="basic-input" />
          </div>

          <div>
            <h2>Education</h2>
            <CheckboxesTags
              label="Education"
              placeholder="Your Education Skills"
              list={top100Films}
            />
          </div>
          <div className="info-tab">
            <h2>Address</h2>
            <p>Country</p>
            <input className="basic-input" />
            <p>State</p>
            <input className="basic-input" />
            <p>City</p>
            <input className="basic-input" />
            <p>Address</p>
            <textarea className="basic-input"></textarea>
          </div>
          <div>
            <button className="main-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </Paper>
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
export default NewFranchise;
