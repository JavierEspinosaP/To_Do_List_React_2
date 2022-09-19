import React, { Component } from "react";
import {Route, Routes} from 'react-router-dom';
import List from './List/List';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import NotFound from '../NotFound'

class Main extends Component {
  render() {

    return (
      <main>
        <List/>
      </main>
    )
  }
}

export default Main;
