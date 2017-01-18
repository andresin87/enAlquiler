'use strict';

import React from 'react';

import { Card, /*CardActions,*/ CardHeader, CardTitle, CardText } from 'material-ui/Card'

require('styles//Card.scss');

const blankImage = require('../images/blank.svg');

const enAlquilerColor = '#016aa9';

class CardComponent extends React.Component {
  render() {
    return (
      <Card
        style={{
          margin: '10px 0',
          padding: '10px',
          minHeight: 350,
          display: 'inline-block',
        }}
        zDepth={1}
      >
        <div
          id="info"
          style={{
            width: '100%',
            position: 'relative',
            height: 47,
          }}
        >
          <a href="#">
            <h2 id="title" style={{
              margin: '10px 0',
              position: 'absolute',
              left: 0,
              color: enAlquilerColor,
            }} >
              {this.props.title}
            </h2>
          </a>
          <h2 id="price" style={{
            margin: '10px 0',
            position: 'absolute',
            right: 20,
          }} >
            {this.props.price} €/mes
          </h2>
        </div>
        <div
          style={{
            width: '100%',
            float: 'inherit',
            height: 'auto',
          }}
        >
          <div
            style={{
              height: 350 - (20+47),
              width: '40%',
              background: null,
              float: 'left',
            }}
          >
            <img
              src={this.props.image}
              style={{
                width: '100%',
                height: '100%',
                margin: 0
              }}
            />
          </div>
          <div
            style={{
              width: '50%',
              float: 'left',
              padding: '0 5% 10px 5%',
            }}
          >
            <div
              id="highights"
              style={{
                fontWeight: 'bold',
              }}
            >
              {this.props.surface}m<sup>2</sup> | {this.props.rooms} Habitaciones.
            </div>
            <div id="description">
              <p>{this.props.description}</p>
              <a href="#" style={{color: enAlquilerColor}}><p>Mas información</p></a>
            </div>
        </div>

        </div>
      </Card>
    );
  }
}

CardComponent.displayName = 'CardComponent';

// Uncomment properties you need
CardComponent.propTypes = {
  title: React.PropTypes.string,
  surface: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  rooms: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  price: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  image: React.PropTypes.string,
  thumb: React.PropTypes.string,
  description: React.PropTypes.string,
};

CardComponent.defaultProps = {
  title: '...',
  surface: '',
  rooms: '?',
  price: '???',
  image: blankImage,
  thumb: null,
};

export default CardComponent;
