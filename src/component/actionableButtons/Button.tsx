/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC } from 'react';

interface ButtonProps {
  buttonText?: string;
  buttonClass: string;
  datatest: string;
  submitFunction?: any;
}

const Button: FC<ButtonProps> = ({ buttonText, buttonClass, datatest, submitFunction }) => (
  <button type="button" onClick={(e) => submitFunction(e)} className={buttonClass} data-test-py={datatest}>
    {buttonText}
  </button>
);

export default Button;
