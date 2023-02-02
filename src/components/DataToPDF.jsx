import React from 'react'
import Pdf from 'react-to-pdf';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DownloadIcon from '@mui/icons-material/Download';

const ref = React.createRef();

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    width: '100%'
}));


const DataToPDF = (props) => {
    console.log(props.formData.name);

    return (
        <React.Fragment>
            <Container style={{ width: '850px' }}>
                <Box sx={{ bgcolor: '#ffffff', padding: '1rem' }} >
                    <div className='document-post' ref={ref}>
                        <h1 style={{ textAlign: "center" }}>Approved</h1>
                        <Grid container spacing={2} style={{ padding: '1rem', display: 'block' }}>
                            <Grid item>
                                <h2 style={{ padding: "1rem" }}>Personal Details</h2>
                                <Item>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Name</lable>
                                        <lable>{props.formData.name}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Email</lable>
                                        <lable>{props.formData.email}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Contact Number</lable>
                                        <lable>{props.formData.contact_number}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>What's app Number</lable>
                                        <lable>{props.formData.whatsapp_number}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Home Address</lable>
                                        <lable>{props.formData.home_address}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Current Address</lable>
                                        <lable>{props.formData.current_address}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Password</lable>
                                        <lable>{props.formData.password}</lable>
                                    </div>
                                </Item>
                            </Grid>
                            <Grid item>
                                <h2 style={{ padding: "1rem" }}>KYC Details</h2>
                                <Item>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Pan Card No</lable>
                                        <lable>{props.formData.pan_card_num}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Bank Name</lable>
                                        <lable>{props.formData.bank_name}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Branch</lable>
                                        <lable>{props.formData.branch}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Account Number</lable>
                                        <lable>{props.formData.account_number}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>IFSC Code</lable>
                                        <lable>{props.formData.ifsc_code}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Aadhar Card Number</lable>
                                        <lable>{props.formData.aadhar_card_number}</lable>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
                                        <lable>Date of Birth</lable>
                                        <lable>{props.formData.date_of_birth}</lable>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                    </div>

                    <Pdf targetRef={ref} fileName="Approved-Agent-doc.pdf" >
                        {({ toPdf }) => <div style={{ display: "flex", justifyContent: 'center' }}><button className="main-btn" onClick={toPdf} >Download Approved pdf <DownloadIcon fontSize="8px" /></button></div>}
                    </Pdf>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default DataToPDF