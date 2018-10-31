import React, { Component } from 'react';

import BwkzQuickLinksComponent from './widgets/BwkzQuickLinks';

class App extends Component {
  render() {
    return (
      <div>
        <BwkzQuickLinksComponent
          backgroundColor="azure"
          backgroundImage=""
          cardTitle="<h2>Flex</h2>"
          cardText="<p>Bacon ipsum dolor amet sausage beef boudin andouille shoulder ball tip. Ground round t-bone salami pastrami, turducken short ribs</p>"
          textColor="#000"
        />
      </div>
    );
  }
}

export default App;
