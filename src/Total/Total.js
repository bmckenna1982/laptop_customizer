import React from 'react';
import './Total.css';

class Total extends React.Component {
    render() {
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
          );
        return (
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
              </div>
            </div>
        )
    }
}   

export default Total;