import React from 'react';
import { connect } from 'react-redux';
// import * as components from './components';
import TodoList2  from './components';

import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(TodoList2);

// export default TodoList extends React.Component{
//   render(){
//     return (

//     );
//   }
// }