import React from 'react';
import classes from './checkbox.module.scss';

const Checkbox = ({ id, register, name }) => {
  return (
    <li className={classes.main} >
      <input
        type="checkbox"
        name={name}
        id={id}
        className={classes.regularCheckbox}
        ref={register}
      />
      <label htmlFor={id}>{id}</label>
    </li>
  );
};

export default Checkbox;