import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom';
import List from './List/List';
import WeatherList from './WeatherList';
import './Main.css'

class Main extends Component {
  render() {

    return (
      <main>
        <Routes>
          <Route element={<List/>}path={'/todo'}/>
          <Route element={<WeatherList/>}path={'/weather'}/>
        </Routes>
      </main>
    )
  }
}

export default Main;
