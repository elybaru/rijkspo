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
    const [currentDetail, setCurrentDetail] = useState({})
    const history = useHistory()
    // console.log(history);

    const params = useParams()
    const id = params.id
    console.log(params)



    // use objectnumber as ID 

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

    function displayError() {
        return (
            <div>Loading...</div>
        )
    }

    function displayDetails() {
        return (
            <Card sx={{ maxWidth: 700 }}>
                <CardMedia
                    component="img"
                    alt={currentDetail.artObject.title}

                    image={currentDetail.artObject.webImage.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {currentDetail.artObject.longTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h5>{currentDetail.artObject.principalMaker}</h5>
                        <h4>{currentDetail.artObject.physicalMedium}</h4>
                        <div>{currentDetail.artObject.label.description}</div>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )
    }

    return (
        <div>
            {currentDetail.artObject ? displayDetails() : displayError()}
        </div>
    )
}

export default ArtworkDetail;
