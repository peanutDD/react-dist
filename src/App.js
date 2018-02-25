/* jshint esversion:6 */

import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

  onGreeting(age) {
    console.log('parent: ' + age);
  }
  render() {
    const user = {
      name: "Anna",
      hobbies: ["Sports", "Reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello !!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"Max"} initialAge={12} user={user} greet={this.onGreeting}>
              <p>I am child</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
