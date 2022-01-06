import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function ArtworkDetail() {
    const [currentDetail, setCurrentDetail] = useState([])
    const history = useHistory()
    // console.log(history);

    const params = useParams()
    const id = params.id
    console.log(params)

    // programmatic routing
    // useParams

    useEffect(() => {
        fetch(`http://localhost:3000/favorites/${id}`)
            .then(resp => resp.json())
            .then(data => fetchDetails(data))
    }, [])

    function fetchDetails(artwork) {
        fetch(`https://www.rijksmuseum.nl/api/en/collection/${artwork.objectNumber}?key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json())
            .then(data => setCurrentDetail(data))
    }
    console.log(currentDetail)

    // useEffect(() => {
    //     fetch(`https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=${process.env.REACT_APP_API_KEY}`)
    //         .then(resp => resp.json())
    //         .then(data => setCurrentDetail(data))
    // }, [])




    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={currentDetail.title}
                    height="140"
                    image={currentDetail.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {currentDetail.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ArtworkDetail;
