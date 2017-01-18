'use strict';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import Menu from './MenuComponent';

require('styles//Container.scss');
let yeomanImage = require('../images/yeoman.png');

class ContainerComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu/>
        <Paper
          className="index"
          zDepth={0}
          style={{
            width: '100%'
          }}
        >
          <img src={yeomanImage} alt="Yeoman Generator" />
          <div style={{}}>
            <RaisedButton label="OK" primary={true} />
          </div>
        </Paper>
      </div>
    );
  }
}

ContainerComponent.displayName = 'ContainerComponent';

// Uncomment properties you need
// ContainerComponent.propTypes = {};
// ContainerComponent.defaultProps = {};

export default ContainerComponent;
