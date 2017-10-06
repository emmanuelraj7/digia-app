import React, { Component } from 'react';
import './App.css';
import SignupForm from './C1-SignupForm';
import Header from './C0-Header';



class App extends Component {
    state = {
      data: []
    };

  render() {
    return (
      <div className="App">
        <Header />  
        <SignupForm onSubmit={submission => 
          this.setState({
          data: [...this.state.data, submission]
          })}
          />
      </div>
    );
  }
}

export default App;



