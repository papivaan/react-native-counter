import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, FormInput, FormLabel, Button } from 'react-native-elements';

import Counter from './Counter/Counter';

export default class App extends React.Component {
  state = {
    counters: [],
    newCounterName: ''
  };

  addCounterHandler = ( event ) => {
    event.preventDefault();

    let counters = this.state.counters;
    counters.push({
      text: this.state.newCounterName,
      count: 0
    });

    let newCounterName = '';

    this.setState({
      counters,
      newCounterName
    });
  };

  deleteCounterHandler = ( index ) => {
    const counters = [...this.state.counters];
    counters.splice(index, 1);
    this.setState({counters});
  };

  plusOneHandler = ( index ) => {
    const counters = [...this.state.counters];
    counters[index].count++;
    this.setState({counters});
  };

  minusOneHandler = ( index ) => {
    const counters = [...this.state.counters];
    counters[index].count--;
    this.setState({counters});
  };

  resetCounterHandler = ( index ) => {
    const counters = [...this.state.counters];
    counters[index].count = 0;
    this.setState({counters});
  };

  render() {
    let counters = null;

    if (this.state.counters) {
      counters = (
        <View>
          {this.state.counters.map((counter, index) => {
            return <Counter 
              key={counter.text + Math.random()}
              text={counter.text}
              count={counter.count}
              deleteCounter={() => this.deleteCounterHandler(index)}
              plusOne={() => this.plusOneHandler(index)}
              minusOne={() => this.minusOneHandler(index)}
              reset={() => this.resetCounterHandler(index)}/>
          })}
        </View>
      );
    }

    return (
      <View style={styles.app}>
        <Header style={styles.header} 
        centerComponent={{ text: 'Ye Olde Auto Counter', style: { color: '#fff' } }}
        outerContainerStyles={{ backgroundColor: '#222' }}
        statusBarProps={{ barStyle: 'light-content' }}/>
        <ScrollView style={styles.content}>
          <FormLabel>Add new counter:</FormLabel>
          <FormInput 
            onChangeText={(newCounterName) => this.setState({newCounterName})}
            value={this.state.newCounterName}/>
          <Button title='Add counter' 
          onPress={this.addCounterHandler}
          backgroundColor='#00FF00'/>
          {counters}
        </ScrollView>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    app: {
      flex: 1
    },
    content: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      position: 'absolute',
      top: 0,
      width: 100,
    }
  });
