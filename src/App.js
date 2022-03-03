import React, {Component} from 'react'
import './App.css'

export default class Contador extends Component {

 state = {
  count: 0,
    mensagem: ""
  }

 add = () => {
  const {count} = this.state
    if (count < 10) {
      this.setState ({
       count: count +1
       })
     }
  }
 remove = () => {
  const {count} = this.state
   if (count > 0) {
     this.setState ({
       count: count -1
     })
   }
}
  render (){
    const {count} = this.state
    const {add, remove} = this
    
    return (
      <div class="container">
       <h1>React Counter App</h1>
      <div class="counter">
        <button class="button" onClick={add}>+</button>
        <h2>{count}</h2>
        <button class="button" onClick={remove}>-</button>
      </div>
      </div>
    )
  }
}