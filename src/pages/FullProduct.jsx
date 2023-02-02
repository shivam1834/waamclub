import React, { useEffect, useState } from 'react';
import { ProductDummyData } from '../components/ProductDummyData';
import { useParams, useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BsCurrencyDollar } from "react-icons/bs";
import AddIcon from '@mui/icons-material/Add';

const FullProduct = () => {
    const [product, setProduct] = useState([{ id: 0, heading: "", discription: "", money: 0, points: 0 },
    ]); // product data
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const affiliate_id = query.get("affiliate_id");

    console.log(affiliate_id)

    const selectedImage = 'https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg';

    const { id } = useParams();

    const removeColor = (id) => {
        const filteredData = ProductDummyData.filter(item => item.id === id);
        setProduct(filteredData);
    };

    useEffect(() => {
        removeColor(+id)
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center' }}>
            <div>
                <Card className=''>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={selectedImage}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product[0].heading}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product[0].discription}
                        </Typography>
                        <Typography gutterBottom variant="p" component="div" color="text.secondary">
                            Price: {Math.floor((Math.random() * 100) + 1)}
                        </Typography>
                        <CardActions>
                            <Typography color="text.secondary">Earn Money - <BsCurrencyDollar style={{ fontSize: '12px' }} />{product[0].money}</Typography>
                            <Typography color="text.secondary">Earn Points - <AddIcon style={{ fontSize: '12px' }} />{product[0].points}</Typography>
                        </CardActions>
                        <button className="main-btn" style={{margin:'1rem 0'}}>Add To Card</button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default FullProduct;
