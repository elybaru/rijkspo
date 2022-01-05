import React from 'react';
import { useHistory } from "react-router-dom"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function ArtworkDetail() {
    const history = useHistory()
    console.log(history);

    return (
        <div>
            Detail
        </div>
    )
}

export default ArtworkDetail
