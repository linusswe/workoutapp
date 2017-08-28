import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

// import PluralTodo from '../components/todo/PluralTodo';
// import Test2 from '../components/Test2';
// import Test3 from '../components/Counter/Test3';
// import TodoTest from '../components/TodoTest/TodoTest';
//import App from '../components/todoRedux/containers/app';
import TodoApp from '../components/simpleTodo/todoApp';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TodoApp />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
