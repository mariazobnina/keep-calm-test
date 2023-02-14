import React, { useRef } from 'react';
// eslint-disable-next-line import/no-named-as-default
import useHorizontalScroll from '../Scroll/Scroll';
import classes from './Slider.module.css';

function Slider() {
  const scrollRef = useHorizontalScroll();
  return (
    <div
      className={classes.slider}
      ref={scrollRef}
      style={{ overflow: 'auto', overflowX: 'hidden' }}

    >
      <div className={classes.picsContainer}>
        <div className={classes.onePicture} id={classes.picture1} />
        <div className={classes.onePicture} id={classes.picture2} />
        <div className={classes.onePicture} id={classes.picture3} />
        <div className={classes.onePicture} id={classes.picture4} />
        <div className={classes.onePicture} id={classes.picture5} />
        <div className={classes.onePicture} id={classes.picture6} />
        <div className={classes.onePicture} id={classes.picture7} />
        <div className={classes.onePicture} id={classes.picture8} />
        <div className={classes.onePicture} id={classes.picture9} />
      </div>
    </div>
  );
}

export default Slider;
