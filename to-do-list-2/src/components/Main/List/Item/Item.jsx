import React, { Component } from "react";
import './Item.css'

export class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: this.props.data
    }
  }
  render() {
    const tarea  = this.state.item
    return(
      <article>
        <h3>{tarea}</h3>
        <button onClick={this.props.delete}>Borrar</button>
      </article>
    ) 
  }
}

export default Item;
