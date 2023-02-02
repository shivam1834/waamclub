import React from 'react'
import { useParams } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';
import { Paper } from "@mui/material";
import { UpdatePercentage } from '../servies/PercentageService';
import { useNavigate } from "react-router-dom";

const SetPercentage = () => {
    const [item, setItem] = React.useState();
    const [status, setStatus] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        setStatus('loading')
        const response = await fetch('http://aviraspices.in/api/web/getPer');
        const data = await response.json();
        const filteredArray = await data.data.filter(obj => obj.id === parseInt(id));
        await setItem(...filteredArray);
        setStatus('success')
        return filteredArray;
    }

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        console.warn(item)
        event.preventDefault();
        const data = new FormData(event.target);
        const user = Object.fromEntries(data.entries());
        console.log(user)
        setIsLoading(true);
        await UpdatePercentage(item).then((response) => {
            console.log(response);
            setIsLoading(false)
            navigate("/set-percentage");
        }).catch(error => {
            console.log(error.response.data)
            setErrors(error.response.data);
            console.log(errors)
            setIsLoading(false)
        }).finally(
            
        )
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(item)

    return (
        <>{status === 'success' ?
            <Paper>
                <h2 style={{ textAlign: 'center', padding: '2rem 0' }}>Update {item.usedFor}</h2>
                <form className="basic-info" onSubmit={handleSubmit}>
                    <div>
                        <div className="personal">
                            <p>Affiliate</p>
                            <input className="basic-input" id="affiliate_Per" name="affiliate_Per" value={item.affiliate_Per} onChange={handleChange} />
                            {errors.affiliate && <p className="input-error">{errors.affiliate}</p>}
                            <p>Franchise</p>
                            <input className="basic-input" id="franchise_Per" name="franchise_Per" value={item.franchise_Per} onChange={handleChange} />
                            <p>UPL-1</p>
                            <input className="basic-input" id="upL1_Per" name="upL1_Per" value={item.upL1_Per} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>UPL-2</p>
                            <input className="basic-input" id="upL2_Per" name="upL2_Per" value={item.upL2_Per} onChange={handleChange} />
                            <p>Consultant</p>
                            <input className="basic-input" id="consultant_Per" name="consultant_Per" value={item.consultant_Per} onChange={handleChange} />
                            <p>Amount</p>
                            <input className="basic-input" id="amount" name="amount" value={item.amount} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <button className="main-btn" type="submit" style={{ margin: '1rem 0' }}>{isLoading ? 'Loading...': 'Update'}</button>
                        {errors.message && <p className="input-error">**{errors.message}</p>}
                    </div>
                </form>
            </Paper>
            : status === 'loading' ? (
                <div className="loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><LoopIcon style={{ fontSize: '5rem' }} /></div>
            ) : (
                <div className="loading" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>Error!</div>
            )}
        </>
    )
}

export default SetPercentage