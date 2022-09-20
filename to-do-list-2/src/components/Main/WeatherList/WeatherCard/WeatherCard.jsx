import React, { Component } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './WeatherCard.css'
import lluviasol from '../../../../assets/lluviasol.gif'
import sol from '../../../../assets/sol.gif'
import nubes from '../../../../assets/nubes.png'

class WeatherCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: this.props.data.main || "Madrid",
      data:this.props.data,
      temp: this.props.defaultList,
      min_temp:this.props.defaultList,
      max_temp:this.props.defaultList,
      description:this.props.defaultList,
      date: this.props.defaultList,
      img: this.props.defaultList,
      hour: this.props.defaultList
    }
  }
 



  componentDidMount() {

    let data = this.state.data
    let temperature = data.map(d => d.main.temp)
    let minimum_temp = data.map(d=>d.main.temp_min)
    let max_temp = data.map(d=>d.main.temp_max)
    let description = data.map(d=>d.weather[0].description)
    let arrDate = data.map(d=>d.dt_txt)
    let date = arrDate.map(d=>d.slice(0,10))
    let sliceHour = arrDate.map(d=>d.slice(11))
    let hour = sliceHour.map(d=>d.slice(0,5))

    let img = []
    for (let i = 0; i < description.length; i++) {
      if (description[i] == "lluvia ligera" || description[i] == "algo de nubes") {
        img.push(lluviasol)
      }
      else if(description[i] == "cielo claro"){
        img.push(sol)
      }
      else if(description[i] == "nubes" || description[i] == "muy nuboso"){
        img.push(nubes)
      }
      else if(description[i] == "nubes dispersas"){
        img.push(nubes)
      }
      
    }
    this.setState({temp: temperature})
    this.setState({min_temp: minimum_temp})
    this.setState({max_temp: max_temp})
    this.setState({description: description})
    this.setState({date: date})
    this.setState({img: img})
    this.setState({hour: hour})
  
  }
  


  render() {

    const temp = this.state.temp
    const min_temp = this.state.min_temp
    const max_temp = this.state.max_temp
    const description = this.state.description
    const date = this.state.date
    const img = this.state.img
    const hour = this.state.hour

    return <article >

        <h2>Fecha: {date[0]}</h2>
        <div className="card-item">
        <div className="data" id="data1">
      {hour[0]?<p>Hora: {hour[0]}</p>:""}
        {temp[0]?<p>Temp: {temp[0]}ºC</p>:""}
        {min_temp[0]?<p>Min: {min_temp[0]}ºC</p>:""}
        {max_temp[0]?<p>Max: {max_temp[0]}ºC</p>:""}
        {description[0]?<p>{description[0]}</p>:""}
        <img id="img" src={img[0]} alt="" />
      </div>
      {hour[1]?<div className="data" id="data2">
      {hour[1]?<p>Hora: {hour[1]}</p>:""}
        {temp[1]?<p>Temp: {temp[1]}ºC</p>:""}
        {min_temp[1]?<p>Min: {min_temp[1]}ºC</p>:""}
        {max_temp[1]?<p>Max: {max_temp[1]}ºC</p>:""}
        {description[1]?<p>{description[1]}</p>:""}
        <img id="img" src={img[1]} alt="" />
      </div>:""}
      {hour[2]?<div className="data" id="data3">
      {hour[2]?<p>Hora: {hour[2]}</p>:""}
        {temp[2]?<p>Temp: {temp[2]}ºC</p>:""}
        {min_temp[2]?<p>Min: {min_temp[2]}ºC</p>:""}
        {max_temp[2]?<p>Max: {max_temp[2]}ºC</p>:""}
        {description[2]?<p>{description[2]}</p>:""}
        <img id="img" src={img[2]} alt="" />
      </div>:""}
      {hour[3]?<div className="data" id="data4">
      {hour[3]?<p>Hora: {hour[3]}</p>:""}
        {temp[3]?<p>Temp: {temp[3]}ºC</p>:""}
        {min_temp[3]?<p>Min: {min_temp[3]}ºC</p>:""}
        {max_temp[3]?<p>Max: {max_temp[3]}ºC</p>:""}
        {description[3]?<p>{description[3]}</p>:""}
        <img id="img" src={img[3]} alt="" />
      </div>:""}
      {hour[4]?<div className="data" id="data5">
        {hour[4]?<p>Hora: {hour[4]}</p>:""}
        {temp[4]?<p>Temp: {temp[4]}ºC</p>:""}
        {min_temp[4]?<p>Min: {min_temp[4]}ºC</p>:""}
        {max_temp[4]?<p>Max: {max_temp[4]}ºC</p>:""}
        {description[4]?<p>{description[4]}</p>:""}
        <img id="img" src={img[4]} alt="" />
      </div>:""}
      {hour[5]?<div className="data" id="data5">
        {hour[5]?<p>Hora: {hour[5]}</p>:""}
        {temp[5]?<p>Temp: {temp[5]}ºC</p>:""}
        {min_temp[5]?<p>Min: {min_temp[5]}ºC</p>:""}
        {max_temp[5]?<p>Max: {max_temp[5]}ºC</p>:""}
        {description[5]?<p>{description[5]}</p>:""}
        <img id="img" src={img[5]} alt="" />
      </div>:""}
      {hour[6]?<div className="data" id="data5">
        {hour[6]?<p>Hora: {hour[6]}</p>:""}
        {temp[6]?<p>Temp: {temp[6]}ºC</p>:""}
        {min_temp[6]?<p>Min: {min_temp[6]}ºC</p>:""}
        {max_temp[6]?<p>Max: {max_temp[6]}ºC</p>:""}
        {description[6]?<p>{description[6]}</p>:""}
        <img id="img" src={img[6]} alt="" />
      </div>:""}
      {hour[7]?<div className="data" id="data5">
        {hour[7]?<p>Hora: {hour[7]}</p>:""}
        {temp[7]?<p>Temp: {temp[7]}ºC</p>:""}
        {min_temp[7]?<p>Min: {min_temp[7]}ºC</p>:""}
        {max_temp[7]?<p>Max: {max_temp[7]}ºC</p>:""}
        {description[7]?<p>{description[7]}</p>:""}
        <img id="img" src={img[7]} alt="" />
      </div>:""}
        </div>
      


      </article>
  }
}

WeatherCard.defaultProps = {
  defaultList: []
}

export default WeatherCard;
