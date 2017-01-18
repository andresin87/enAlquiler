require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Container from './ContainerComponent';

injectTapEventPlugin();

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Menu />
          <Container />
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
