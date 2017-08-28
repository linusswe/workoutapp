'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Todo from './Todo';
import * as todoActions from './actions/todoActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Todo
        todo={state.todo}
        {...actions} />
    );
  }
}

export default connect(state => ({
    state: state.todo
  }),
  (dispatch) => ({
    actions: bindActionCreators(todoActions, dispatch)
  })
)(TodoApp);