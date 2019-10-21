import React from  'react';
import './CartList.css'

class CartList extends React.Component {
    render() {        
        const summary = Object.keys(this.props.selectedState).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selectedState[feature];
        
            return (
                <div className="summary__option" key={featureHash}>
                    <div className="summary__option__label">{feature} </div>
                    <div className="summary__option__value">{selectedOption.name}</div>
                    <div className="summary__option__cost">
                        {this.props.USCurrencyFormat(selectedOption.cost)}
                    </div>
                </div>
            );
        });
        return summary;        
    }
}

export default CartList;