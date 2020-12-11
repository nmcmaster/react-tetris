import React from 'react';
import { StyledKeypad } from './styles/StyledKeypad';
import Key from './Key';

const Keypad = () => {
  return <StyledKeypad><Key icon="L" /><Key icon="D" /><Key icon="R" /></StyledKeypad>

}

export default Keypad;
