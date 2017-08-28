import React from 'react';
import { StyleSheet, Text, View ,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard ,AsyncStorage} from 'react-native';

export default class Input extends React.Component {

state={
    value:'',
}
    fetchData () {
        console.log('this is the value: ', this.props.value)
        fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
        .then((response) => { return response.json() })
        .then((data) => this.props.updateJokes(data.value))
        .then(Keyboard.dismiss)
    }
addExercise(){
    AsyncStorage.setItem("UID123", this.state.value);
    //this.componentDidMount();
    this.props.onChange();
  }
    render(){
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
            <Text>Input new exercise</Text>
                <TextInput
                    keyboardType={'default'}
                    value={this.props.value}
                    style={styles.input}
                    // onChangeText={(text) => this.props.onChange(text)}
                    onChangeText={(text) => this.setState({value: text})}
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
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {        
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2
    },
    button:{
        backgroundColor: 'blue',
        height:40,
        width: 100,
        borderColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color:'white'
    }
})