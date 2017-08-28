import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput,TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  input:{

  }
});

export default class Todo extends Component {
  state={
    value: '',
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { todo, increment, decrement } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center',flexDirection:'row', justifyContent: 'center' }}>
        <Text>{todo}</Text>
         <TextInput
                    keyboardType={'default'}
                    value={this.props.value}
                    style={styles.input}
                    // onChangeText={(text) => this.props.onChange(text)}
                    onChangeText={(text) => this.setState({value: text})}
                />
        <TouchableOpacity onPress={increment} style={styles.button}>
         
          <Text    
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            allowFontScaling={true}
            >
            add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>remove</Text>
        </TouchableOpacity>
      </View>
    );
  }
}