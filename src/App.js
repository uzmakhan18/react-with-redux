import React, { Component } from 'react';
import './App.css';
import CreateTodo from './CreateTodo.js'
import Table from './Table.js'

export class App extends Component {
  render() {
    return (
      <div className="todoApp">
         <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <Table />
          </div>
        </div>
      </div>
    )
  }
}

export default App


