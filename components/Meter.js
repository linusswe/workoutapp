import React from 'react';
import { StyleSheet,View ,Text, TouchableHighlight, Image} from 'react-native';


export default class Meter extends React.Component {
     constructor(props) {
        super(props);
        this.state = {value: props.value,};

        this.handleUpClick = this.handleUpClick.bind(this);
        this.handleDownClick = this.handleDownClick.bind(this);
    }

    
    handleUpClick() {
        let newVal = this.state.value + 5;
        this.setState({value: newVal})
    };
     handleDownClick() {
        let newVal = this.state.value - 5;
        this.setState({value: newVal})
    };

    render() {
        return(
            <View style={styles.container}>

                <Text style={styles.text}>{this.state.value} {this.props.text}</Text>    
                <TouchableHighlight onPress={this.handleUpClick}>
                    <Image
                        style={styles.button}
                        source={require('./images/up.png')}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={this.handleDownClick}>
                    <Image
                        style={styles.button}
                        source={require('./images/down.png')}
                    />
                </TouchableHighlight>
                 
            </View>
        );
    }

}

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
            alignItems: 'center',

    },
    text: {
        fontSize: 20,
        paddingLeft: 5,
        backgroundColor: '#DCDCDC',
    },
    button: {
      paddingRight: 5,
        height: 50,
        width: 50,
  },
});

