import React, { Component } from 'react';

class AddSmoothie extends Component {
  state = {
    title: '',
    ingredient: '',
    ingredients: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  keyPressed = (e) => {
    if (e.code === 'Space') {
      this.state.ingredients.push(this.state.ingredient);
      e.target.value = '';
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var id = Math.random() * 1000;
    var smoothie = {};
    smoothie.title = this.state.title;
    smoothie.ingredients = this.state.ingredients;
    smoothie.id = id;

    this.props.addSmoothie(smoothie);
    e.target.reset();

    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit} className='mt-4'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            className='form-control'
            onChange={this.handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='ingredients'>Ingredients</label>
          <input
            type='text'
            name='ingredient'
            className='form-control'
            onChange={this.handleChange}
            onKeyPress={this.keyPressed}
          />
        </div>
        <ul>
          {this.state.ingredients.map((ing, index) => {
            return (
              <li className='p-2' key={index}>
                {ing}
              </li>
            );
          })}
        </ul>
        <button className='btn btn-success'>Add</button>
      </form>
    );
  }
}

export default AddSmoothie;
