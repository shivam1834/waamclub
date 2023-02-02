import React from 'react';
import TextField from '@mui/material/TextField';
import { CreateDemat } from '../servies/contactFormService';
import ContactPopup from '../components/ContactPopup';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import ShareIcon from '@mui/icons-material/Share';
import styled from 'styled-components';

const NewDemat = () => {
    const [values, setValues] = React.useState({ name: '', email: '', password: '', mobile: '', referal_id: '' });
    const [loading, setLoading] = React.useState(false);
    const [buttonPopup, setButtonPopup] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('referral_id');
    console.log(typeof (id));

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log({ name: values.name, email: values.email, mobile: values.mobile, password: values.password, referal_id: id });

        setLoading(true);
        await CreateDemat({name: values.name, email: values.email, password: values.password, mobile: values.mobile, referal_id: id}).then((response)=>{
            console.log(response);
            setIsLoading(false)
            setButtonPopup(!buttonPopup)
        }).catch(error => {
            console.log(error.response.data)
            setErrors(error.response.data);
            console.log(errors)
            setIsLoading(false)
        }).finally(

        )
        setLoading(false);
        setValues({ name: '', email: '', password: '', mobile: '', referal_id: '' });
    }

    console.log(errors,isLoading)

    return (
        <Wrap>
            <ContactPopup trigger={buttonPopup} setTrigger={setButtonPopup} className="Popup">
                <div className="popup-inner">
                    <h1>Share Link <ShareIcon /> </h1>
                    <p>click to copy</p>
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined" fullWidth>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            value={window.location}
                            disabled={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Tooltip title="Click To Copy" placement="top">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={()=>{navigator.clipboard.writeText(window.location)}}
                                        edge="end"
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            }
                            label=""
                        />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined" >
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            value={'https://www.angelone.in/'}
                            disabled={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Tooltip title="Click To Copy" placement="top">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={()=>{navigator.clipboard.writeText('https://www.angelone.in/')}}
                                        edge="end"
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            }
                            label=""
                        />
                    </FormControl>
                    <br />
                    <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined" >
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            value={'https://www.cricbuzz.com/'}
                            disabled={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Tooltip title="Click To Copy" placement="top">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={()=>{navigator.clipboard.writeText('https://www.cricbuzz.com/')}}
                                        edge="end"
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>
                                    </Tooltip>
                                </InputAdornment>
                            }
                            label=""
                        />
                    </FormControl>
                    <br />
                </div>
            </ContactPopup>
            <div className='content'>
                <header className='content-header'>
                    <h1 className='content-main-heading'>Contact Waam-Club</h1>
                    <h3 className='content-heading'>Feel free to get in touch with us.</h3>
                </header>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <TextField id="outlined-basic fullName" label="Full Name" variant="outlined" name="name" placeholder="Mr. Anyisob Baidoo" onChange={handleChange} value={values.name} />
                        <small>An identifiable name which we can use to contact you.</small>
                        {errors.name ? <span className='errors'>{errors.name}</span>:null}
                    </label>
                    <label htmlFor="email">
                        <TextField id="outlined-basic email" label="Email" variant="outlined" name="email" placeholder="e.g. user.email@domain.com" onChange={handleChange} value={values.email} />
                        {errors.email ? <span className='errors'>{errors.email}</span>:null}
                    </label>
                    <label htmlFor="mobile">
                        <TextField id="outlined-basic mobile" label="Mobile" variant="outlined" name="mobile" placeholder="e.g. +233(0)-392-498-2882" onChange={handleChange} value={values.mobile} />
                        {errors.mobile ? <span className='errors'>{errors.mobile}</span>:null}
                    </label>
                    <label htmlFor="password">
                        <TextField id="outlined-basic password" type='password' label="password" variant="outlined" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
                    </label>
                    {loading ? <button type="submit" disabled={loading} className='content-form-button'>loading... </button> : <button type="submit" disabled={loading} className='content-form-button'>Submit</button>}
                </form>
            </div>
        </Wrap>
    );
}

export default NewDemat;

const Wrap = styled.div`
display:flex;
justify-content:center;
height:100vh;
align-items:center;
.content {
    max-width: 650px;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 0 2rem;
    width: 650px;
  }
  
  .content-header {
    color: #322e2f;
    padding-bottom: 1.5rem;
    text-align: center;
  }
  
  .content-main-heading {
    margin: 0;
    color: inherit;
  }
  
  .content-heading {
    margin: 0;
    color: rgb(97, 97, 97);
    font-weight: normal;
    margin-top: 0.5rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
  
  label {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    gap: 0.25rem;
  }
  
  small {
    color: rgb(97, 97, 97);
  }
  
  .content-form-button {
    outline: none;
    border: none;
    color: white;
    border-radius: 4px;
    text-align: center;
    padding: 0.45rem 1rem;
    font-size: 1rem;
    background: #557d83;
    max-width: 10rem;
    min-width: 10rem;
    align-self: center;
    cursor: pointer;
  }
  
  .content-form-button:hover {
    opacity: 0.8;
  }

.center-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .popup_inner {
    display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
  }
  
  .errors {
    color:red;
    font-size: 10px;
  }
`

