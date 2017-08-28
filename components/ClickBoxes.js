import React from 'react';
import { StyleSheet,View ,Text} from 'react-native';




export default class ClickBoxes extends React.Component {

  state= {
    val1 : true,
    val2 : true,
    val3 : true,
    val4 : true,
    val5: true,
  }
handleClick(name) {
  this.state[name] ? this.setState({[name]:false}) : this.setState({[name]:true});
  // console.log("pressed " + name);
  // this.state[name] === 'ios-sad' ? this.setState({[name]:'md-happy'}): this.setState({[name]:'ios-sad'});
  // console.log(this.props.style);
  
}
  render() {
    var checkboxes = [];

    for(let i = 1; i <= this.props.number; i++){
      console.log(i);
      checkboxes.push(
        <Text key={i} style={styles.textLabel}> {i} </Text>
      )
    //<Icon ios={this.state.val[i] ? 'ios-sad' : 'md-happy'} name=i  style={this.state.val1 ? iconStyles.iosSad : iconStyles.mdHappy} onPress={()=>this.handleClick('val1')}/>
    }

    return (
      <View>
      <View style={styles.container}>
      {checkboxes}
      </View>
      <View style={styles.container}>        
        
            <Text>123</Text>
      </View>
      </View>
    );
  }
}
const iconStyles = {
  iosSad:{
    fontSize: 80,
     color: 'red'
    } ,
  mdHappy: {
    fontSize: 80,
     color: 'green'
    }
}
const styles = StyleSheet.create({
  textLabel:{
    fontSize: 25,    
  },
 
  container: {    
    flex: 1,
    flexGrow:1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content:{
    flex:1,
    flexDirection: 'row',
    flexGrow:1,
  },
  button:{
    width: 100,
    height: 50
  },
  iosSad:{
    fontSize: 40,
     color: 'red'
    },
  mdHappy: {
    fontSize: 40,
     color: 'green'
    }
});
