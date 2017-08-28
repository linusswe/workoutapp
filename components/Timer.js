import React from 'react';
import { ScrollView, StyleSheet, Text, View, AsyncStorage,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard , Image } from 'react-native';
import { ExpoConfigView } from '@expo/samples';


export default class Timer extends React.Component {
    state={
        time:0
    }
    componentDidMount() {
       
    }

    startTimer(){
       this._interval =  setInterval( () => {
                this.setState({
                    time : this.state.time + 1
                })
        },1000)
    }
    stopTimer(){
        clearInterval(this._interval);
    }

    render(){
        return(
            <View style={styles.container}>
            <View style={styles.content}>
                </View>
                <View style={styles.content}>
                        <Text style={styles.header}>Timer</Text>
                        <Text style={styles.text}>{this.state.time}</Text>
                </View>
                <View style={styles.content}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => this.startTimer()}
                    >
                        <Text style={styles.buttonText}>
                        Start timer</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {() => this.stopTimer()}
                    >
                        <Text style={styles.buttonText}>
                        Stop timer
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 20,
    flexDirection: 'column',
    alignContent : 'center',
    justifyContent: 'center',
    
  },
  content: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header: {
    fontSize: 40,

  },
  text: {
   flexGrow: 0.5,
    fontSize: 40,

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
        margin: 5,
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