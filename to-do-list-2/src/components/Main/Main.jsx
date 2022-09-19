import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom';
import List from './List/List';
import Weather from './Weather';

class Main extends Component {
  render() {

    return (
      <main>
        <Routes>
          <Route element={<List/>}path={'/todo'}/>
          <Route element={<Weather/>}path={'/weather'}/>
        </Routes>
      </main>
    )
  }
}

export default Main;
