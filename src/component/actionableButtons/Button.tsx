/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';

interface ButtonProps {
  buttonText: string;
  buttonClass: string;
  dataTest: string;
  submitFunction: any;
}

const Button: FC<ButtonProps> = ({ buttonText = '', buttonClass = '', dataTest, submitFunction }) => (
  <button type="button" onClick={(e) => submitFunction(e)} className={buttonClass} data-test-py={dataTest}>
    {buttonText}
  </button>
);

export default Button;
