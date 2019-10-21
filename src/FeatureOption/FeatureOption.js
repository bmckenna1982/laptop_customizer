import React from 'react';
import './FeatureOption.css';
import slugify from 'slugify';

class FeatureOption extends React.Component {
    render() {
        console.log(this.props.features)
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selectedState[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat(item.cost)})
                  </label>
                </div>
              );
            });
        })
        return features;
    }
}

export default FeatureOption;