import { Paper } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function VandorAddProduct() {
    const [previreData, setPreviewData] = React.useState({
        name:'Lizard',
        commition: 0,
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
    })
    const [file, setFile] = React.useState('https://cdn.pixabay.com/photo/2017/02/05/11/43/iguana-2039719_960_720.jpg');
    const [insufficient,setInsufficient ] = React.useState('')
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setPreviewData({
          ...previreData,
            [e.target.name]: e.target.value
        })
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const user = Object.fromEntries(data.entries());
      // TODO 1000 is dummy [ we use vendor wallet amount ]
      if (user.commition > 1000) {
       return setInsufficient('insufficient fund for commition ')
      }

      navigate('/vendor/productList');
    }

  return (
    <Paper>
      <div className="basic-info">
        <form onSubmit={handleSubmit}>
          <div className="personal">
            <h2>Product Details</h2>
            <p>Name</p>
            <input className="basic-input" name="name" value={previreData.name} onChange={handleChange}/>
            <p>Description</p>
            <textarea className="basic-input" name="description" value={previreData.description} onChange={handleChange}></textarea>
            <p>Image</p>
            <input type="file" name="file" onChange={handleChange}/>
            <p>Cammition</p>
            <input type='text' className="basic-input" name='commition' value={previreData.commition} onChange={handleChange}/>
          </div>
          <div>
            <button className="main-btn" type="submit">Add Product</button>
            {insufficient ? <pre style={{color:'red',fontSize:'12px',marginTop: '1rem'}}>** {insufficient}<Link to='/vendor/Dashboard'style={{fontSize:'12px'}}> Click To Add More fund</Link></pre>:''}
            
          </div>
        </form>
        <div>
          <div>
            <h2>Preview</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 140 }}
                image={file}
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {previreData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {previreData.description}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Cammition Amount: {previreData.commition}</Button>
                </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default VandorAddProduct;
