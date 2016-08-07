import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import JSONToXMLPage from './containers/JSONToXMLPage';

export default (
  <Route path="/" component={App}>
    // Each react-router setup should have an index route, I presume; in other
    // words, this is the homepage.
    <IndexRoute component={HomePage} />

    // In our example, jsonToXML is the container component that will host
    // the drop to convert contents from JSON to XML
    <Route path="/jsonToXML" component={JSONToXMLPage} />
  </Route>
);
