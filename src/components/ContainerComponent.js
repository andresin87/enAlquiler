'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';

import Card from './CardComponent';

require('styles//Container.scss');

class ContainerComponent extends React.Component {

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
            this.props.data.forEach((e, i) => {
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
  data: React.PropTypes.array
};
ContainerComponent.defaultProps = {
  data: [{},{},{}]
};

export default ContainerComponent;
