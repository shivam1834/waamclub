import React from 'react';
import { Paper } from "@mui/material";
import CheckboxesTags from "../components/Checkbox";
import DataToPDF from '../components/DataToPDF';
// import { regularEmailRegex, regularPhonenumberRegex, regularPanCardNumberRegex, regularImageRegex, regularBankAccountNumberRegex, regularIfscCodeRegex, regularAadharCardNumberRegex, regularNamerRegex } from '../components/utiils/Regex';
import { useNavigate } from "react-router-dom";
import {CreateAgent} from '../servies/AgentService';

function NewAgent() {
  const [formData, setFormData] = React.useState();
  const [pdfConvert, setPdfConvert] = React.useState(false);
  const [passwordError, SetPasswordError] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  console.log(passwordError,isLoading)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("event.target")
    const data = new FormData(event.target);
    const user = Object.fromEntries(data.entries());
    console.log(user)
    setFormData('/')
    setPdfConvert('/')
    SetPasswordError('/')
    // let copyOfObject = {};

    // if (!(regularNamerRegex.test(user.name))) {
    //   copyOfObject = {};
    //   copyOfObject.name = 'please enter correct Name'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularEmailRegex.test(user.email))) {
    //   copyOfObject = undefined;
    //   copyOfObject.email = 'please enter correct email address'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularPhonenumberRegex.test(user.contact_number))) {
    //   Object.keys(copyOfObject).forEach(key => {
    //     delete copyOfObject[key];
    //   })
    //   console.log('check')
    //   copyOfObject.contact_number = 'please enter correct Contact Number'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // TODO

    // if (user.home_address.length <= 1) {
    //   copyOfObject.home_address = 'please enter correct Address'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(user.current_address)) {
    //   copyOfObject.current_address = 'please enter correct Address'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(user.password.match(/[A-Z]/) != null && user.password.match(/[a-z]/) != null && user.password.match(/[0-9]/) != null && user.password.match(/[#?!@$%^&*-]/) != null && user.password.length >= 10)) {
    //   copyOfObject = {};
    //   console.log('check')
    //   copyOfObject.password = 'Must have at least one uppercase letter, one lowercase letter, one number and one special character & min 10 character'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularPanCardNumberRegex.test(user.pan_card_num))) {
    //   copyOfObject = {};
    //   console.log('check')
    //   copyOfObject.pan_card_num = 'please enter correct Pan Card Number'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // TODO

    // if (!(regularImageRegex.test(user.pan_card_image))) {
    //   copyOfObject.pan_card_image = 'please upload Image'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularBankAccountNumberRegex.test(user.account_number))) {
    //   copyOfObject = {};
    //   copyOfObject.account_number = 'please enter correct Bank Number'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularIfscCodeRegex.test(user.ifsc_code))) {
    //   copyOfObject = {};
    //   copyOfObject.ifsc_code = 'please enter correct Ifsc code'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularAadharCardNumberRegex.test(user.aadhar_card_number))) {
    //   copyOfObject = {};
    //   copyOfObject.aadhar_card_number = 'please enter correct Aadhar Card Number'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularImageRegex.test(user.image))) {
    //   copyOfObject.image = 'please upload Image'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }

    // if (!(regularImageRegex.test(user.signature))) {
    //   copyOfObject.signature = 'please upload Image'
    //   return setErrors(errors => ({
    //     ...errors,
    //     ...copyOfObject
    //   }))
    // }
    // setFormData(user);
    // setPdfConvert(true);
    // console.log(user)

    setIsLoading(true);
    await CreateAgent({
      name: user.name,
      email: user.email,
      password: user.password,
      state:user.state,
      mobile: user.contact_number,
      city: user.city
    }).then((res) => {
      console.log(res)
      navigate("/agents");
    }).catch(error => {
      console.log(error.response.data)
      setErrors(error.response.data);
      console.log(errors)
    }).finally(
      setIsLoading(false)
    )
  }

  return (
    <React.Fragment>
      {!pdfConvert ?
        (<Paper>
          <form className="basic-info" onSubmit={handleSubmit}>
            <div>
              <div className="personal">
                <h2>Personal Details</h2>
                <p>Name ( As per aadhar Card )</p>
                <input className="basic-input" id="name" name="name" />
                {errors.errors.name && <p className="input-error">{errors.errors.name}</p>}
                <p>Email</p>
                <input className="basic-input" id="email" name="email" />
                {errors.errors.email && <p className="input-error">{errors.errors.email}</p>}
                <span>{errors.email}</span>
                <p>Contact Number</p>
                <input className="basic-input" id="contact_number" name="contact_number" />
                {errors.errors.mobile && <p className="input-error">{errors.errors.mobile}</p>}
                <span>{errors.contact_number}</span>
                <p>What's app Number</p>
                <input className="basic-input" id="whatsapp_number" name="whatsapp_number" />
                <p>Home Address</p>
                <input className="basic-input" id="home_address" name="home_address" />
                {errors.home_address}
                <p>Current Address</p>
                <input className="basic-input" id="current_address" name="current_address" />
                <span>{errors.current_address}</span>
                <p>Choose Nearest Hub</p>
                <CheckboxesTags
                  label="Nearest Hub"
                  placeholder="Your Nearest Hub"
                  list={top100Films}
                />
                <p>Password</p>
                <input className="basic-input" id="password" name="password" />
                {errors.errors.password && <p className="input-error">{errors.errors.password}</p>}
                {/* <span>{errors.password}</span> */}
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
                <h2>KYC Details</h2>
                <p>Pan Card No</p>
                <input className="basic-input" id="pan_card_num" name="pan_card_num" />
                <span>{errors.pan_card_num}</span>
                <p>Pan Card (Upload Image)</p>
                <input type="file" ></input>
                <span>{errors.pan_card_image}</span>
                <p>Bank Name</p>
                <input className="basic-input" id="bank_name" name="bank_name" />
                <p>Branch</p>
                <input className="basic-input" id="branch" name="branch" />
                <p>Account Number</p>
                <input className="basic-input" id="account_number" name="account_number" />
                <span>{errors.account_number}</span>
                <p>IFSC Code</p>
                <input className="basic-input" id="ifsc_code" name="ifsc_code" />
                <span>{errors.ifsc_code}</span>
                <p>Aadhar Card Number</p>
                <input className="basic-input" id="aadhar_card_number" name="aadhar_card_number" />
                <span>{errors.aadhar_card_number}</span>
                <p>Date of Birth</p>
                <input type={"date"} className="basic-input" id="date_of_birth" name="date_of_birth" />
                <p>Image</p>
                <input type="file" ></input>
                <span>{errors.image}</span>
                <p>Signature</p>
                <input type="file" ></input>
                <span>{errors.signature}</span>
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
                <input className="basic-input" id="state" name="state"/>
                {errors.errors.state && <p className="input-error">{errors.errors.state}</p>}
                <p>City</p>
                <input className="basic-input" id="city" name="city"/>
                {errors.errors.city && <p className="input-error">{errors.errors.city}</p>}
                <p>Address</p>
                <textarea className="basic-input"></textarea>
              </div>
            </div>
            <div>
              <button className="main-btn" type="submit">Create</button>
            </div>
          </form>
        </Paper>)
        : <DataToPDF formData={formData} />}
    </React.Fragment>
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

export default NewAgent;
