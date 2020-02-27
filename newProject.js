import React from 'react';
import {StyleSheet, View, Text } from 'react-native';



export default class App extends React.Component{

render(){
    return(
   
       <View style={styles.hello}>
         <Text>Scratch and win game</Text>
       </View>
       
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: "center",
  },
 
});