import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <h3>Prop Number Is : {this.props.propNumber}</h3>
        <h3>Prop String Is : {this.props.propString}</h3>
        <h3>Prop Object Is : {this.props.propObject.obj1}</h3>

        <Parent />

      </div>
    );
  }
}

// App.propTypes= {
//   propObject: React.PropTypes.object,
//   propString: React.PropTypes.string,
//   propNumber: React.PropTypes.number
// }

App.defaultProps= {
  propNumber: 369,
  propString: "This is prop string",
  propObject:{
    obj1: "I am Object 1",
    obj2: "I am Object 2",
    obj3: "I am Object 3"
  }
}

class Parent extends Component {

  constructor(props){
    super(props);

    this.state = {
      cars: ['s-Bmw','s-Merc','s-Audi','s-City']
    };
  }

  handleClick(){
    this.setState({cars:this.state.cars.reverse()});
  }

  render(){
    return(
      <div>
        <h2 onClick={this.handleClick.bind(this)}>Just Some Info</h2>

        <Cars msg="Cars are cool" model="369" coolCars={this.state.cars}/>

      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['Bmw','Merc','Audi','City']
}

class Cars extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h3>I am from Cars Components !</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolCars.map((item,i)=> {
            return <p key={i}>{item}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
