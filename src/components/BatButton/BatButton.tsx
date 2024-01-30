import React, {useState} from 'react';
import { Button, Pressable, View, Text } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/PasswordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const[password, setPassword] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePassword()
        setPassword(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(password)
    }

  return (
    <>
        {/* <Button
            accessibilityLabel='clique em mim'
            title='clique aqui'
        >
        </Button> */}
        <BatTextInput password = {password}/>

        <Pressable 
        onPress={handleGenerateButton}
        style={styles.buttonContainer}
        >
            <Text style={styles.textButton}>💡 GENERATE</Text>
        </Pressable>

        <Pressable
        onPress={handleCopyButton} 
        style={styles.buttonContainer}
        >
            <Text style={styles.textButton}>⚡ COPY</Text>
        </Pressable>
    </>
  );
}