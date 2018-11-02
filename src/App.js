import React, { Component } from 'react';

import BwkzQuickLinksComponent from './widgets/BwkzQuickLinks';
import BwkzQuickLinksComponentFullimage from './widgets/BwkzQuickLinksFullImage';
import api from './widgets/bwkzQuickLinksData';

class App extends Component {
  render() {
    return (
      <div>
        <BwkzQuickLinksComponent data={api} />

        <BwkzQuickLinksComponentFullimage backgroundColor="beige" />
      </div>
    );
  }
}

export default App;
