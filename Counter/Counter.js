import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const Counter = (props) => {
    return (
      <View style={styles.counter}>
        <Text style={styles.text}>
          {props.text}: {props.count}
        </Text>
        <View style={styles.buttons}>
          <Button 
            onPress={props.plusOne} 
            title='+1' 
            backgroundColor='green' 
            rounded/>
          <Button 
            onPress={props.minusOne} 
            title='-1'
            backgroundColor='goldenrod'
            rounded/>
          <Button 
            onPress={props.reset} 
            title='Reset'
            backgroundColor='blue'
            rounded/>
        
        <Button 
            onPress={props.deleteCounter} 
            title='Delete'
            backgroundColor='crimson'
            rounded/>
            </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    counter: {
        margin: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(238,238,238)',
        padding: 16
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 0.5,
        marginTop: 5,
        marginBottom: 5
    }
  });

  export default Counter;