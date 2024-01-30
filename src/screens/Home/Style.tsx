import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer:{
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#4D4D4D',
      paddingTop: 20,
      paddingBottom: 10,
      marginBottom: 60
    },
    inputContainer:{
      width:'80%',
      flexDirection:'column',
      alignItems:'center'
    }
  });

export default styles
