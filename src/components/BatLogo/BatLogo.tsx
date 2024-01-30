import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';

import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image
          source={batLogo}
          style={{height:150, resizeMode:'contain'}}
        />
    </View>
  );
}