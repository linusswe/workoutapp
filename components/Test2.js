import React from 'react';
import {Input, ListView, ScrollView, StyleSheet, Text,Button, View, AsyncStorage,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard , Image } from 'react-native';

let todoList = [
    { name:'Todo 1', value: '00.00.00'},    
];
let ds = new ListView.DataSource({
    rowHasChanged: (row1,row2) => row1 !== row2,
});

export default class Test2 extends React.Component{
     constructor(props){
        super(props);

        this.state={
            dataSource: ds.cloneWithRows(todoList),
           
        }
    }
    handleRemove(){
        console.log("123");
    }
    handleAdd(){
        console.log('adding');
    }
    renderRows(){
        return(
            <View style={styles.lapsWrapper}>
                <Text>Todo List </Text>
                <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={ (rowData) =>(
                    <View style={styles.lapRow}>
                        <Text style={styles.lapNumber}>{rowData.name}</Text>
                        <Text style={styles.lapTime}>{rowData.value}</Text>
                        <TouchableHighlight onPress={this.handleRemove}>
                            <Image
                                style={styles.buttonSmall}
                                source={require('../components/images/close.png')}
                            />
                        </TouchableHighlight>
                    </View>
                )}
                />  
            </View>

        );
    }
    renderButtons() {
        return(
            <View>
                
                <TouchableHighlight onPress={this.handleAdd}>
                            <Text>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
    render() {
        return(
            <View>
                {this.renderRows()}

                {this.renderButtons()}
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomWidth: 0.5,
        paddingTop : 20,
        paddingBottom: 10,
        backgroundColor: '#F9F9F9',

    },
    title: {
        alignSelf: 'center',
        fontWeight: '600',
    },
    timerWrapper : {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flex: 1,


    },
    timerWrapperInner : {
       borderWidth: 0.5,
       alignSelf: 'center',

    },
    top: {
        flex:1
    },
    bottom: {
        flex: 2,
        backgroundColor: '#F0EFF5',

    },
    mainTimer:{
        fontSize: 60,
        fontWeight: '100',
        alignSelf: 'flex-end'

    },
    lapTimer: {
        fontSize: 18,
        alignSelf: 'flex-end'
    },
    buttonWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 15,
        paddingBottom: 30,
    },
    button:{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonSmall:{
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lapsWrapper: {
        flex:1
    },
    lapRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        paddingTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
                alignItems: 'center'

    },
    lapNumber: {
        fontSize: 16,
        color: '#777'
    },
    lapTime: {
        color: '#000',
        fontSize: 20,
        fontWeight: '300'
    },
    startBtn: {
        color: '#00cc00',
    },
    stopBtn: {
        color: 'red',
    },

});