import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom"
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
    console.log(history);

    useEffect(() => {
        fetch(`https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=${process.env.REACT_APP_API_KEY}`)
            .then(resp => resp.json())
            .then(data => setCurrentDetail(data))
    }, [])
    console.log(currentDetail)

    return (
        <div>
            Detail
        </div>
    )
}

export default ArtworkDetail
