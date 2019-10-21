import React from 'react';
import './FeatureOption.css';
import slugify from 'slugify';

class FeatureOption extends React.Component {
    
    render() {
        const options = this.props.feature.map(item => {
            const itemHash = slugify(JSON.stringify(item));           
            return (
            <div key={itemHash} className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(this.props.featureName)}
                checked={item.name === this.props.selectedState[this.props.featureName].name}
                onChange={e => this.props.updateFeature(this.props.featureName, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                {item.name} ({this.props.USCurrencyFormat(item.cost)})
                </label>
            </div>
            );
        });              
        
        return options;
    }
}

export default FeatureOption;