import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ClientRouter from './components/ClientRouter';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header siteName="Game Dev Network"/>
            <ClientRouter />
          <Footer footerText="Copyright Game Dev Network 2017"/>
        </div>
      </Router>
    );
  }
}

export default App;
