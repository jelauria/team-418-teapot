import React from 'react';
import '../containers/HeaderStyle.css';
import { Logo } from '@auth0/cosmos';

function Header() {
  return (
    <React.Fragment>
      <div className="header-section tc">
        <h1 className="f2 black tracked-tight mb0">cofeeteapots</h1>	
        <h1 id="welcome">Welcome to the Coffee Teapots!</h1>
        <div className="powered-by flex items-center justify-center">
          <p className="mr1">powered by</p>
          <Logo />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;