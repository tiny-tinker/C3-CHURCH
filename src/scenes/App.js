import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

/**
 * Import scenes
 */
import Home from './Home/Home';
import Visit from './Visit/Visit';
import Give from './Give/Give';
import Contact from './Contact/Contact';
import Media from './Media/Media';
import Connect from './Connect/Connect';
import Location from './Location/Location';

const App = () => (
  <main>
    <Menu />
    <Route path="/visit/:location" component={Location} />
    <Route exact path="/" component={Home} />
    <Route exact path="/visit" component={Visit} />
    <Route exact path="/give" component={Give} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/media" component={Media} />
    <Route exact path="/connect" component={Connect} />
    <Footer />
  </main>
);

export default App;
