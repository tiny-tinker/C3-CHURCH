import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Footer from './components/Footer/Footer';

const App = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Footer/>
  </main>
);

export default App;
