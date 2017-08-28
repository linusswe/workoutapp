import React from 'react';
import { ScrollView, StyleSheet, Text, View, AsyncStorage,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard , Image } from 'react-native';
import { ExpoConfigView } from '@expo/samples';


import Meter from '../components/Meter';
import Input from '../components/Input';
export default class ExerciseList extends React.Component {
  state = {
    exercises: [
      { name: 'Exercise 1', value: 5 },
      { name: 'Exercise 2', value: 15 },
      { name: 'Exercise 2', value: 25 },
    ],
  }
  constructor(props) {
    super(props);

    AsyncStorage.setItem("UID123", "My value here");



  }
  render() {
      return(
          <View>
          {this.render2}
          </View>
      )
  }

  render2(){
        return this.state.exercises.map(function (exercise, i) {
      return (
        <View style={styles.content} key={i}>
          <Text style={styles.text}>{exercise.name}</Text>

          <Meter text='kg' value={exercise.value} />
          <TouchableHighlight onPress={this.handleRemove}>
                    <Image
                        style={styles.button2}
                        source={require('../components/images/close.png')}
                    />
          </TouchableHighlight>
        </View>
      );
    });
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 20,
    
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  header: {
    fontSize: 25,

  },
  text: {
   flexGrow: 0.5,
    fontSize: 20,
    paddingRight: 5,

  },
  left: {
   alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
  button:{
        backgroundColor: '#3B88C3',
        height:40,
        width: 150,
        borderColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
      paddingRight: 5,
        height: 50,
        width: 50,
  },
    buttonText:{
      color:'white',
    },
  input: {        
      height: 40,
      width: 300,
      borderColor: 'gray',
      borderWidth: 2
  },
});