import React, { Component } from 'react'
import './List.css';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item'
import data from '../data.json'

export class List extends Component {


  constructor(props) {
    super(props)

    this.newItem = React.createRef()

    this.state = {
      items: data,
      newItem: ""
    }
  }

  paintItems = () => this.state.items.map((item, i) => <Item data={item} key={uuidv4()} delete={() => this.deleteItem(i)} />)

  deleteItem = () => this.setState({ items: [] })

  clearItems = () => this.setState({ items: [] })

  addItem = (event) => {
    event.preventDefault()


    const item = event.target.item.value
    this.setState({ items: [...this.state.items, item] })
    event.target.reset()
  }


  resetItems = () => this.setState({ items: data })


  deleteItem = (i) => {
    const remainingItems = this.state.items.filter((item, j) => i !== j)
    this.setState({ items: remainingItems })
  }

  clearInput = () => {
    this.setState({newItem:""})
  }

  handleChange = () => this.setState({ newItem: this.newItem.current.value })




  render() {


    return (
      <section>
        <div id="container">  
          <h1>Incluye tus tareas pendientes</h1>
          <form onSubmit={this.addItem}>
            <label htmlFor="tarea">Tarea a incluir:</label>
            <div id="inputContainer">
              <input type="text" ref={this.newItem} id="item" name="item" />
              <input type="submit" value="ADD" id="inputSubmit" onSubmit={this.clearInput} />
            </div>
            
          </form>



          <h1>Lista de tareas añadidas</h1>
          {this.paintItems()}
          {this.state.items.length ?
            <button onClick={this.clearItems}>Clear</button> : ""}

          <button onClick={this.resetItems}>Reset</button>
        </div>
      </section>


    )
  }
}

export default List;
