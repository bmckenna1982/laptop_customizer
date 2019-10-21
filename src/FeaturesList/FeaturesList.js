import React from 'react';
import './FeaturesList.css';
import FeatureOption from '../FeatureOption/FeatureOption';
import slugify from 'slugify';

class FeaturesList extends React.Component {
    // build all the fieldsets
    
    render() {
        console.log(this.props.features)
        //for (feature in this.props.features) {
            //console.log(feature.)
        //}
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            console.log(featureHash)
            console.log(feature)
            console.log(this.props.features)
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