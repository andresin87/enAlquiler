'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import { grey100 } from 'material-ui/styles/colors';

require('styles//Header.scss');

let enAlquilerSVG = require('../../assets/enAlquiler.svg');

class HeaderComponent extends React.Component {
  render() {
    return (
      <AppBar
        style={{
          backgroundColor: grey100,
          padding: 0
        }}
        title={
          <img
            src={enAlquilerSVG}
            style={{
              height: 48,
              marginTop: 10,
              marginLeft: '10%'
            }}
          />
        }
        showMenuIconButton={false}
      />
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
