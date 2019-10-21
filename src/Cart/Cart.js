import React from 'react';
import './Cart.css'
import CartList from '../CartList/CartList'
import Total from '../Total/Total'

class Cart extends React.Component {
    render() {
        return  (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartList selectedState={this.props.selectedState} USCurrencyFormat={this.props.USCurrencyFormat}/>
                <hr />
                {/* {summary} **replace with CartList **CartList component includes CartItem component */}
                <Total USCurrencyFormat={this.props.USCurrencyFormat} selectedState={this.props.selectedState}/>
                {/* **replace below till section with Total component
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(total)}
                </div>
                </div> */}
            </section> 
        )

    }
}

export default Cart;