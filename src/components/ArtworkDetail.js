import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useFavorites from "../hooks/useFavorites";


function ArtworkDetail({ isFavorite }) {
    const [currentDetail, setCurrentDetail] = useState({})
    const history = useHistory()
    // console.log(history);

    const [handleFavorite, deleteFavorite, favorite] = useFavorites(currentDetail.artObject)

    const [favorited, setFavorited] = useState(isFavorite)

    const params = useParams()
    const objectNumber = params.id
    console.log("artworkdetail")

    // use objectnumber as ID 

    useEffect(() => {
        console.log("hello")
        fetchDetails(objectNumber)
    }, [])

    function fetchDetails(objectNumber) {
        fetch(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${process.env.REACT_APP_API_KEY}`)
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
                    {favorite !== null && favorited === true ? <Button onClick={(e) => {
                        console.log(favorite)
                        deleteFavorite(favorite.id).then(() => setFavorited(false))
                    }} size="small">Remove from Favorites</Button> : <Button onClick={(e) => {
                        handleFavorite(e).then(() => setFavorited(true))
                    }} size="small">Add to Favorites</Button>}
                    <Button size="small">Share</Button>

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
