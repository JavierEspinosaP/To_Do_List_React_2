import React, { Component } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './WeatherCard.css'

class WeatherCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: this.props.data.main || "Madriddd"

    }
  }



  render() {

    const {temp,feels_like, humidity, pressure} = this.props.data.main
    const {description} = this.props.description
    const {dt_txt} = this.props.data
    return <article>
<Card sx={{ Width: 275}} className="card-item">
      <CardContent>
        <Typography variant="p">
        Temperatura: {temp}ºC
        </Typography>
        <Typography variant="p" component="div">
        Fecha: {dt_txt}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Pronóstico: {description}
        </Typography>
      </CardContent>
    </Card>
</article>
  }
}

export default WeatherCard;
