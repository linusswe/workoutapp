import React from 'react';
import { View,ScrollView, StyleSheet ,Text} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import StopWatch from '../components/StopWatch';

export default class TempScreen extends React.Component {
  static navigationOptions = {
    title: 'Timer screen',
  };
 
  render() {
    return (
      <View style={styles.container}>
        <StopWatch />
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
