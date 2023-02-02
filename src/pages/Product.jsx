import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import { ProductDummyData } from '../components/ProductDummyData';
import { BsCurrencyDollar } from "react-icons/bs";
import AddIcon from '@mui/icons-material/Add';

const Product = () => {

    const navigate = useNavigate();

    const createAffiliateLink = (id, affiliatedId) => {
        return `/product/${id}?affiliate_id=${affiliatedId}`
    }

    const handalClick = (id) => {
        const userRole = JSON.parse(window.localStorage.getItem('roles'));
        if (!userRole) {
            return navigate('/login');
        }
        const copyUrl = createAffiliateLink(id, userRole)
        navigator.clipboard.writeText(copyUrl);
    }

    return (
        <>
            <Typography className='card-row' component="div">
                {ProductDummyData.map((item, index) => (
                    <Card key={index} className='card'>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.heading}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.discription}
                            </Typography>
                            <CardActions>
                                <Typography style={{fontSize:'14px',marginBottom:'-1rem'}} color="text.secondary">Earn Money - <BsCurrencyDollar style={{fontSize:'12px'}}/>{item.money}</Typography>
                                <Typography style={{fontSize:'14px',marginBottom:'-1rem'}} color="text.secondary">Earn Points - <AddIcon style={{fontSize:'12px'}}/>{item.points}</Typography>
                            </CardActions>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handalClick(item.id)}>Share</Button>
                            <Link to={'/product/' + item.id}><Button size="small">Learn More</Button></Link>
                        </CardActions>
                    </Card>

                ))}
            </Typography>
        </>
    );
};

export default Product;

