import React, { Component, PropTypes } from 'react';

/**
 * The is the hosting application compnent. It hosts the subsequent
 * container components that make up the various routes for this
 * application.
 */
export default class App extends Component {
  // TBD - What exactly does this do?
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  /**
   * Renders the application itself.
   *
   * @return {ReactElement} the react element to display
   */
  render() {
    return (
      <div data-sample="this is a test">
        {this.props.children}
      </div>
    );
  }
}
