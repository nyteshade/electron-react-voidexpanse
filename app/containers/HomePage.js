import React, { Component } from 'react';
import Home from '../widgets/Home';

/**
 * The HomePage container component, renders the root route. Links to
 * other container component "pages" should be present from this component
 */
export default class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}
