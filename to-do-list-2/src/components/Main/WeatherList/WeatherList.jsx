import React, { Component } from "react";
import WeatherCard from "./WeatherCard"
import { v4 as uuidv4 } from 'uuid';
import './WeatherList.css'

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
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.ciudad}&units=metric&lang=sp&APPID=2731e52a2ffcdce7e38ca16b0b20d96d`);
  const data = await resp.json();
  this.setState({pronostico: data.list})

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
  this.setState({pronostico: data.list})
  console.log("HOLAAA", this.state.pronostico);
}
render() {
  console.log("pronostico render: ", this.state.pronostico);
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
              <WeatherCard data={weather} description={weather.weather[0]}  key={uuidv4()}/>)
          }

      </div>        
  );
}
}

WeatherList.defaultProps = {
  defaultList: []
}

export default WeatherList;
