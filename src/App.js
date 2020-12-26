import React, { Component } from 'react';
import "./App.css"; 
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddSmoothie from "./components/AddSmoothie";
import Navbar from "./components/common/Navbar";


class App extends Component {
  state = { 
    smoothies: [
      {
        id: 1,
        title: 'Cario Jones',
        ingredients: ['rice', 'break', 'potatos'],
      },
      { id: 2, title: 'NYC Regal', ingredients: ['orange', 'apple', 'banana'] },
      {
        id: 3,
        title: 'Mario Smooth',
        ingredients: ['cheese', 'honey', 'milk'],
      },
    ],
   }

   handleAdd = (smoothie) => {
     const smoothies = [...this.state.smoothies, smoothie]; 
     this.setState({ smoothies }); 
   }



   handleDelete = (smoothie) => {
    const smoothies = this.state.smoothies.filter((s) => s.id !== smoothie.id);
    this.setState({
      smoothies,
    });
  };

  render() { 
    const { smoothies } = this.state; 
    return ( 
      <React.Fragment>
        <Navbar /> 
        <main className="container">
          <Switch>
            <Route path="/add" 
            render={(props)=> <AddSmoothie smoothies={smoothies} addSmoothie = {this.handleAdd} 
            {...props} /> } 
            />
            <Route exact path="/" 
              render={(props)=> <Home smoothies={smoothies} 
              deleteSmoothie={this.handleDelete} 
              {...props} /> }  
            />
          </Switch>
       </main>
      </React.Fragment>
     );
  }
}
 
export default App;