import React from 'react';
import { ScrollView, StyleSheet, Text, View, AsyncStorage,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard , Image } from 'react-native';
import { ExpoConfigView } from '@expo/samples';


import Meter from '../components/Meter';
import Input from '../components/Input';
import ExerciseList from '../components/ExerciseList';
export default class FoodScreen extends React.Component {
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
  componentDidMount() {
    AsyncStorage.getItem("UID123").then((value) => {
      newExercises = this.state.exercises;
      newExercises.push({ name: value, value: 5 });
      this.setState({ newExercises });
    }).done();
  }


  static navigationOptions = {
    title: 'app.json',
  };
  handleRemove() {
    
  }

  getExercises() {
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
  addExercise(){
    AsyncStorage.setItem("UID123", "My value here");
    this.componentDidMount();
  }
  onChange(text){
    this.props
  }

inputField(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <Text>Input new exercise</Text>
                <TextInput
                    keyboardType={'default'}
                    value={this.props.value}
                    style={styles.input}
                    // onChangeText={(text) => this.props.onChange(text)}
                />
                <TouchableHighlight
                    style={styles.button}
                    onPress = {() => this.addExercise()}
                >
                <Text
                    style={styles.buttonText}
                >Add Exercise</Text>
                </TouchableHighlight>
            </View>
</TouchableWithoutFeedback>
            
        )
    }

  render() {


    return (
      <ScrollView contentContainerStyle={styles.container} >
        
        
        <Text style={styles.header}>Exercises</Text>
        
        <Input 
        value={this.state.value}
        onChange={() => this.componentDidMount()}
        />
        <ExerciseList />
        
      </ScrollView>
    );
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
