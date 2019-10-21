import React from 'react';
import './Features.css'
import FeaturesList from '../FeaturesList/FeaturesList'

class Features extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeaturesList USCurrencyFormat={this.props.USCurrencyFormat} selectedState={this.props.selectedState} features={this.props.features} updateFeature={this.props.updateFeature}/>
                {/* {features} **replace with FeaturesList component **FeatureList component includes FeatureOptions coponent */}
          </form>
        )
    }
}

export default Features;