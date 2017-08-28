import React from 'react';
import { ScrollView, StyleSheet , Text, Button, Alert} from 'react-native';
import { ExpoConfigView } from '@expo/samples';


export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };
  state = {
    data: 'No data',    
  }
//https://httpbin.org/get
  //let url = 'http://slackapp.cloudhub.io/forecast';
//  componentDidMount() {    
//     return fetch('http://slackapp.cloudhub.io/forecast')      
//       // .then((response) => {
//       //   return response;
//       // })
//       .then((responseData) => {
//         console.log(responseData);
//         this.setState({
//           data: responseData,
//         });
//       });
//   }
_onPressButtonPOST() {
    fetch("http://slackapp.cloudhub.io/forecast", {
    method: "GET",
    // body: JSON.stringify({
    //   key: "value",
    // })
  })
  // .then((response) => response.json())
  .then((data) => {
    console.log(data)
    this.setState({
          data: data._bodyText
    });
  })
  // .then((responseData) => {
  //   // Alert.alert(
  //   //           "POST Response",
  //   //           "Response Body -> " + JSON.stringify(responseData._bodyText)
  //   //       )

    

  //   console.log(responseData)
  //   this.setState({
  //         data: JSON.stringify(responseData._bodyText)
  //   });
  // })
  .done();
}
  render() {
    return (
      <ScrollView style={styles.container}>

        <Button 
          onPress={() => this._onPressButtonPOST()}
          title="Get Weather data"
          color="#841584"
        />
        <Text style={styles.weatherText}>{this.state.data}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  weatherText: {
    // whiteSpace: 'pre-wrap',
  }
});
