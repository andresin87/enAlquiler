'use strict';

import React from 'react';

import Header from './HeaderComponent';
import Container from './ContainerComponent';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { grey100 } from 'material-ui/styles/colors';

const axios = require('axios');

require('styles//App.scss');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {order: 1, filter: ''};
    this.change = this.handleChange.bind(this);
    this.filter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    this.setState({data: this.props.data});
    axios.get('http://private-d5eaa-test9068.apiary-mock.com/properties')
      .then((response) => {
        if (response.data && response.data.success) {
          this.setState({data: response.data.properties});
        }

      })
      .catch((/*error*/) => {
        // console.log(error);
      });
  }

  handleChange = (event, index, value) => {
    this.setState({
      order: value
    });
    return this.state;
  };
  handleFilter = () => {
    this.setState({
      filter: this.textField.getValue()
    });
    return this.state;
  };



  render() {
    const getOrdered = (data) => {
      switch(this.state.order) {
        case 2: // Precio Ascendente
          return data.sort((a, b) => (a.price <= b.price) ? -1 : 1);
          break;
        case 3: // Precio Descendente
          return data.sort((a, b) => (a.price > b.price) ? -1 : 1);
          break;
        case 4: // nº Habitaciones
          return data.sort((a, b) => (a.rooms <= b.rooms) ? -1 : 1);
          break;
        case 1: // Defecto
        default:
          return getInitialData();
          break;
      }
    };
    const getVisible = (data) => {
      return data.filter((el) => {
        if (this.state.filter === '') {
          return true;
        } else {
          const escapeRegExp = (stringToGoIntoTheRegex) => {
            return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          };
          const stringToGoIntoTheRegex = escapeRegExp(this.state.filter.toLowerCase());
          const regex = new RegExp(stringToGoIntoTheRegex, 'g');
          const r = regex.test(el.title.toLowerCase());
          return (r);
        }
      });
    };

    const getInitialData = () => {
      let data = [];
      this.state.data.forEach((e) => {
        data.push(e);
      });
      return data;
    };

    const getData = () => {
      let data = getInitialData();
      data = getOrdered(data);
      data = getVisible(data);
      return data;
    };
    return (
      <div id="app-component">
        <Header />
        <div
          className="menu-component"
          style={{
            float: 'left',
            width: '80%',
            margin: '10px 10% 10px 10%'
          }}

        >
          <div id="menu-order" style={{
            float: 'left',
            marginTop: 16
          }} >
            <div style={{padding: '20px 0 10px 0', float: 'left'}} >Ordenar por:</div>
            <DropDownMenu value={this.state.order} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Por defecto" />
              <MenuItem value={2} primaryText="Precio ASC" />
              <MenuItem value={3} primaryText="Precio DEC" />
              <MenuItem value={4} primaryText="nº Habitaciones" />
            </DropDownMenu>
          </div>
          <div id="filter" style={{float: 'left'}} >
            <TextField
              hintText="Dirección"
              ref={(me) => {this.textField = me;}}
              floatingLabelText="Buscar"
              onChange={this.handleFilter}
            />
          </div>
        </div>
        <Container
          data={getData()}
        />
        <div
          id="footer"
          style={{
            backgroundColor: grey100,
            position: 'fixed',
            bottom: 0,
            height: 30,
            width: '80%',
            padding: '0 10%'
          }}
        >
          <div
            style={{
              marginTop: 10,
              fontSize: '.8em',
              float: 'right'
            }}
          >
            Andrés Lucas Enciso - Enero 2017.
          </div>
        </div>
      </div>
    );
  }
}

AppComponent.displayName = 'AppComponent';

// Uncomment properties you need
AppComponent.propTypes = {
  data: React.PropTypes.array
};
AppComponent.defaultProps = {
  data: [{},{},{}]
};

export default AppComponent;
