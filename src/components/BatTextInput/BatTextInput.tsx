import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProp{
    password:string
}
export function BatTextInput(props:BatTextInputProp) {
    
  return (
    <TextInput
        style={styles.inputPassword}
        placeholder='password'
        value={props.password}
    />
  );
}