import React from 'react';
import classes from './NavBar.module.css';

function NavBar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="logo" src="/pics/Logo.png" />
        <img alt="logo" src="/pics/Circeya.png" />
      </div>
      <p>+7 (495) 495-49-54</p>
    </div>
  );
}

export default NavBar;
