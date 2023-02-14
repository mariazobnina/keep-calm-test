/* eslint-disable max-len */
import React from 'react';
import classes from './InfoBlock.module.css';

function InfoBlock({ pic1, pic2 }) {
  const background1 = {
    backgroundImage: `url(${pic1})`,
  };

  const background2 = {
    backgroundImage: `url(${pic2})`,
  };

  return (
    <div className={classes.infoblock}>
      <div className={classes.infoblockPart1}>
        <div className={classes.picInfoBlock1} style={background1} />
        <div className={classes.textContainer}>
          <div className={classes.heading}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          </div>
          <p>
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

      <div className={classes.infoblockPart2}>
        <div className={classes.textContainer}>
          <div className={classes.heading}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          </div>
          <p>
            Incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className={classes.picInfoBlock2} style={background2} />
      </div>

    </div>
  );
}

export default InfoBlock;
