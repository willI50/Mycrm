





import * as React from 'react';

import ProductHero from './modules/ProductHero';
// import ProductValues from './modules/ProductValues';
import AppAppBar from './modules/AppAppBar';
import withRoot from './modules/withRoot';


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      
     
      
    </React.Fragment>
  );
}

export default withRoot(Index);