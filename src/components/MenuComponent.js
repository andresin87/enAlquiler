'use strict';

import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

require('styles//Menu.scss');

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div
        className="menu-component"
        style={{
          float: 'left',
          width: '80%'
        }}

      >
        <div id="menu-order" style={{
          float: 'left',
          marginTop: 16
        }} >
          <div style={{padding: '20px 0 10px 0', float: 'left'}} >Ordenar por:</div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Por defecto" />
            <MenuItem value={2} primaryText="Precio Ascendente" />
            <MenuItem value={3} primaryText="Precio Descendente" />
            <MenuItem value={4} primaryText="N1 Habitaciones" />
          </DropDownMenu>
        </div>
        <div id="filter" style={{float: 'left'}} >
          <TextField
            hintText="Dirección"
            floatingLabelText="Buscar"
          />
        </div>
      </div>
    );
  }
}

MenuComponent.displayName = 'MenuComponent';

// Uncomment properties you need
// MenuComponent.propTypes = {};
// MenuComponent.defaultProps = {};

export default MenuComponent;
