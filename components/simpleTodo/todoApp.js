import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoList } from './containers';

const store = createStore(reducer);
export default class TodoApp  extends React.Component {

render(){
    return(
  <Provider store={store}>
    <TodoList />
  </Provider>
);
}

}