import React from 'react';
import './FeaturesList.css';
import FeatureOption from '../FeatureOption/FeatureOption';


class FeaturesList extends React.Component {  
    render() {        
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;            
            return (           
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                    <h3>{feature}</h3>
                    </legend>
                    <FeatureOption featureName={feature} feature={this.props.features[feature]} updateFeature={this.props.updateFeature} selectedState={this.props.selectedState} features={this.props.features} USCurrencyFormat={this.props.USCurrencyFormat}/>
                </fieldset>
            );
            }) 
        return features;        
    }
}

export default FeaturesList;