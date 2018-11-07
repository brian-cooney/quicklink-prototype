import React, { Component } from 'react';

import BwkzQuickLinksComponent from './widgets/BwkzQuickLinks';
import BwkzQuickLinksComponentRows from './widgets/BwkzQuickLinks_rows';
import api from './widgets/bwkzQuickLinksData';
import apiRow from './widgets/bwkzQuickLinksData_rows';

class App extends Component {
  render() {
    return (
      <div>
        <BwkzQuickLinksComponent data={api} />
        <BwkzQuickLinksComponentRows data={apiRow} />
      </div>
    );
  }
}

export default App;
