import React from 'react';
import { ScrollView, StyleSheet, Text,Button, View, AsyncStorage,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard , Image } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import Redux from 'redux';
import { combineReducers , createStore} from 'redux';

import { Provider } from 'react-redux'



const todo = (state,action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return{
                id: action.id,
                text: action.text,
                completed: false,
            }
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state;
            }
            return {
                ...state,
                complete: !state.completed
            };
            default:
                return state;
    }
};

const todos = (state = [], action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t=>
                todo(t, action)
            ) 
        default:
            return state;
    }
};

const visibilityFilter = (
    state = 'SHOW_ALL',
    action
    ) => {
        switch(action.type){
            case 'SET_VISIBILTY_FILTER':
                return action.filter;
            default:
                return state;
        }
    };
// const {combineReducers} = Redux;
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
// const { createStore } =  Redux;
const store = createStore(todoApp); 
let nextTodoId = 0;
class TodoApp extends React.Component{
    render() {

        console.log(this.props.todos);
        return(
            <View>
                <Button
                    title='Add todo'
                    onPress={()=>{
                        console.log(this.props.todos);
                        store.dispatch({
                            type: 'ADD_TODO',
                            text: 'Test',
                            id: nextTodoId++,
                        }
                        );
                    }
                }>Add Todo
                </Button>
                <View>
                    {this.props.todos.map(todo =>
                        <View key={todo.id}>
                            <Text>{todo.text}</Text>
                        </View>
                        )}
                </View>
            </View>
        );
    }
}

export default class Test extends React.Component {

    render() {
        return (
            <Provider store={ store }>
                <View>
                    <Text>123</Text>
                    <TodoApp 
                        todos={store.getState().todos}
                    />
                </View>
            </Provider>
        );
    }

}
