import React, { Component } from "react";
import WeatherCard from "./WeatherCard"
import { v4 as uuidv4 } from 'uuid';
import './WeatherList.css'
import myApiKey from './config'

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pronostico: this.props.defaultList,
      ciudad: this.props.city || 'Madrid'
       }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
}

    
async componentDidMount(){
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.ciudad}&units=metric&lang=sp&APPID=${myApiKey}`);
  const data = await resp.json();
  let arrDay = [];
  let arrTotal = []
  let initialDate = data.list[0].dt_txt.slice(0,10)
  for (let i = 0; i < data.list.length; i++) {
    let actualData = data.list[i]
    let actualDate = data.list[i].dt_txt.slice(0, 10) //2022-09-24
    if (actualDate!=initialDate) {
      arrTotal.push(arrDay)
      initialDate = actualDate
      arrDay = []
    }
    arrDay.push(actualData)
    }
  this.setState({pronostico: arrTotal})

  console.log('componentDidMount');

}

componentDidUpdate(prevProps, prevState){
  console.log('prevProps: ', prevProps, 'prevState: ', prevState)
  console.log('componentDidUpdate');
}

handlerChangeCity = async (event) =>{
  event.preventDefault();
  const city = event.target.ciudad.value
  this.setState({ciudad: city})
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=sp&APPID=2731e52a2ffcdce7e38ca16b0b20d96d`);
  const data = await resp.json();
  let arrDay = [];
  let arrTotal = []
  let initialDate = data.list[0].dt_txt.slice(0,10)
  for (let i = 0; i < data.list.length; i++) {
    let actualData = data.list[i]
    let actualDate = data.list[i].dt_txt.slice(0, 10) //2022-09-24
    if (actualDate!=initialDate) {
      arrTotal.push(arrDay)
      initialDate = actualDate
      arrDay = []
    }
    arrDay.push(actualData)
    }
  this.setState({pronostico: arrTotal})
}
render() {
  return (
      <div className="card-list">
          <h1>Pronóstico próximos días en {this.state.ciudad}</h1>
          <form onSubmit={this.handlerChangeCity}>
            <label htmlFor="ciudad">Introduce la ciudad</label>
            <input id="ciudad" type="text" name="ciudad"/>
            <input type="submit" />
          </form>
          {
            this.state.pronostico.map(weather => 
              <WeatherCard data={weather} key={uuidv4()}/>)
          }

      </div>        
  );
}
}

WeatherList.defaultProps = {
  defaultList: []
}

export default WeatherList;
