import React from 'react';
import InfoBlock from '../InfoBlock/InfoBlock';
import Slider from '../Slider/Slider';
import classes from './Main.module.css';

function Main() {
  return (
    <div className={classes.main}>
      <h1>ut aliquip ex ea commodo consequat</h1>
      <InfoBlock pic1="/pics/1_infoblock.png" pic2="/pics/2_infoblock.png" />
      <h1>Lorem ipsum dolor sit amet</h1>
      <Slider />
      <h1>ut aliquip ex ea commodo consequat</h1>
      <InfoBlock pic1="/pics/3_infoblock.png" pic2="/pics/4_infoblock.png" />
      <div className={classes.footer}> © TEST, 1022–2022</div>
    </div>
  );
}

export default Main;
