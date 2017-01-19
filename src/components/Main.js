require('normalize.css/normalize.css');
require('styles/Main.scss');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './AppComponent';

injectTapEventPlugin();

class AppComponent extends React.Component {


  render() {
    return (
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    );
  }
}

export default AppComponent;
