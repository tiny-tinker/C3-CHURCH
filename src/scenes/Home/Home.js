import React from 'react';

import Welcome from './sections/Welcome/Welcome';
import Introduction from './sections/Introduction/Introduction';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Welcome/>
        <Introduction/>
      </div>
    );
  }
}

export default Home;