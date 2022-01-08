import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useFavorites from "../hooks/useFavorites";


function ArtworkDetail() {
    const [currentDetail, setCurrentDetail] = useState({})
    const [handleFavorite, deleteFavorite, favorite, setFavorite] = useFavorites(currentDetail.artObject)

    const params = useParams()
    const objectNumber = params.id
    console.log("artworkdetail")


    useEffect(() => {
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

    function displayRemoveFromFavorites() {
        return (
            <button onClick={(e) => {
                console.log(favorite)
                deleteFavorite(favorite.id).then(() => setFavorite(null))
            }} size="small">Remove from Favorites</button>
            // <Button onClick={(e) => {
            //     console.log(favorite)
            //     deleteFavorite(favorite.id).then(() => setFavorite(null))
            // }} size="small">Remove from Favorites</Button>
        )
    }

    function displayAddFromFavorites() {
        return (
            <button onClick={(e) => {
                handleFavorite(e).then(() => setFavorite(true))
            }} size="small">Add to Favorites</button>
            // <Button onClick={(e) => {
            //     handleFavorite(e).then(() => setFavorite(true))
            // }} size="small">Add to Favorites</Button>
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
                    {favorite !== null ? displayRemoveFromFavorites() : displayAddFromFavorites()}
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


{/* <CardActions>
{favorite !== null ? <Button onClick={(e) => {
    console.log(favorite)
    deleteFavorite(favorite.id).then(() => setFavorite(null))
}} size="small">Remove from Favorites</Button> : <Button onClick={(e) => {
    handleFavorite(e).then(() => setFavorite(true))
}} size="small">Add to Favorites</Button>}
</CardActions> */}