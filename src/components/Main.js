require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './HeaderComponent';

injectTapEventPlugin();

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <div className="index">
            <img src={yeomanImage} alt="Yeoman Generator" />
            <div style={{}}>
              <RaisedButton label="OK" primary={true} />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
