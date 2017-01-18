'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';

import Card from './CardComponent';

require('styles//Container.scss');

const blankImage = require('../images/blank.svg');
const axios = require('axios');

class ContainerComponent extends React.Component {

  componentWillMount() {
    this.setState({data: this.props.data});
    axios.get('http://private-d5eaa-test9068.apiary-mock.com/properties')
    .then((response) => {
      console.log(response.data);
      console.log(response.data && response.data.success);
      if (response.data && response.data.success) {
        this.setState({data: response.data.properties});
        console.log(this);
      }

    })
    .catch((error) => {
      // console.log(error);
    });
  }

  render() {
    return (
      <div className="container">
        <Paper
          className="index"
          zDepth={0}
          style={{
            width: '100%'
          }}
        >
          {(() => {
            let r = [];
            this.state.data.forEach((e, i) => {
              r.push(
                <Card
                  key={`card-${i}`}
                  {...e}
                />);
            });
            return r;
          })()}
        </Paper>
      </div>
    );
  }
}

ContainerComponent.displayName = 'ContainerComponent';

// Uncomment properties you need
ContainerComponent.propTypes = {
  data: React.PropTypes.array,
};
ContainerComponent.defaultProps = {
  data: [{},{},{}],
};

export default ContainerComponent;
