import React from 'react';
import './FeaturesList.css';
import FeatureOption from '../FeatureOption/FeatureOption';

class FeaturesList extends React.Component {
    render() {
        return (
        <FeatureOption onChange={this.props.updateFeature} selectedState={this.props.selectedState} features={this.props.features} USCurrencyFormat={this.props.USCurrencyFormat}/>
        )
    }
}

export default FeaturesList;