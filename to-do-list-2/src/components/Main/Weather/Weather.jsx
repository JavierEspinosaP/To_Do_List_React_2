import React, { Component } from "react";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { pokeLista: this.props.defaultList }
    // Event binding (Bindear eventos)
    console.log('CONSTRUCTOR')
}

async componentDidMount(){
    //Petición HTTP
    // fetch('https://pokeapi.co/api/v2/pokemon')
    //     .then(resp => resp.json())
    //     .then(data => data)
    const resp = await fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}');
    const data = await resp.json();
    this.setState({
        pokeLista: this.props.defaultList
    })
    console.log('componentDidMount');
}
  render() {
    return <div>Weather</div>;
  }
}

export default Weather;
