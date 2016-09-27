import React, { Component } from 'react';
import Header from './visual/Header';
import Footer from './visual/Footer';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.title = this.props.route.title;
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
