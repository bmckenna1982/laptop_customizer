import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify';

import './App.css';
import Header from './Header/Header'
import Features from './Features/Features';
import Cart from './Cart/Cart';

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  USCurrencyFormat = (number) => {
    let currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
      });    
    return currency.format(number)
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    
    //main return should be the only one left after refactoring
    return (
      <div className="App">
        <Header />        
        <main>
          <Features USCurrencyFormat={number => this.USCurrencyFormat(number)} selectedState={this.state.selected} features={this.props.features} updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}/>          
          <Cart selectedState={this.state.selected} USCurrencyFormat={number => this.USCurrencyFormat(number)}/>          
        </main>
      </div>
    );
  }
}

export default App;
