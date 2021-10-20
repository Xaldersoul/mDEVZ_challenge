import React from 'react';
import classes from './radialButton.module.scss';


const Radial = ({
  name,
  id,
  value = '',
  label = '',
}) => {
  return (
    <div className={classes.adjust}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={classes.radio}
      />
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
    </div>
  )
};

export default Radial;
