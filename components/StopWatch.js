import React from 'react';
import { ScrollView, StyleSheet, Text, View, AsyncStorage,TextInput ,TouchableHighlight,TouchableWithoutFeedback, Keyboard , Image, ListView } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

import TimeFormatter  from 'minutes-seconds-milliseconds';

let laps = [
    { name:'Lap 1', value: '00.00.00'},    
];
let ds = new ListView.DataSource({
    rowHasChanged: (row1,row2) => row1 !== row2,
});

export default class StopWatch extends React.Component {
    constructor(props){
        super(props);

        this.state={
            dataSource: ds.cloneWithRows(laps),
            isRunning: false,
            mainTimer: null,
            lapTimer: null,
            mainTimerStart : null,
            lapTimerStart: null,
        }
    }

_renderTitle(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Stopwatch</Text>
        </View>
    )
}
_renderTimers(){
    return(
        <View style={styles.timeWrapper}>
            <View style={styles.timeWrapper}>
                <Text style={styles.lapTimer}>{ TimeFormatter(this.state.lapTimer) }</Text>
                <Text style={styles.mainTimer}>{ TimeFormatter(this.state.mainTimer) }</Text>
            </View>
        </View>
    )
}
handleStartStop() {
        let {isRunning, firstTime, mainTimer, lapTimer} = this.state;

        if( isRunning){
            clearInterval(this.interval);
            this.setState({
                isRunning : false
            });
            return ;
        }

        this.setState({
            mainTimerStart: new Date(),
            lapTimerStart: new Date(),
            isRunning : true
        });

        this.interval = setInterval(() =>{
            this.setState({
                mainTimer: new Date() - this.state.mainTimerStart + mainTimer,
                lapTimer: new Date() - this.state.lapTimerStart + lapTimer,
            });
        },30 );
}
handleLapReset() {
    let {isRunning, mainTimerStart, mainTimer} = this.state;
    if( mainTimerStart && !isRunning){
        laps = [],
        this.setState({
            mainTimerStart: null,
            lapTimerStart: null,
            mainTimer:0,
            lapTimer: 0,
            dataSource: ds.cloneWithRows(laps),
        });
    }else if(mainTimerStart && isRunning){
        console.log("lap")
        laps.push({
            name:'Lap ' + (laps.length +1), value: TimeFormatter(this.state.mainTimer)
        });
        this.setState({
            mainTimerStart: new Date(),
            mainTimer:0,
            dataSource: ds.cloneWithRows(laps),
        })
        
    }
}
_renderButtons(){
    let isRunning = this.state.isRunning;
    let mainTimerStart = this.state.mainTimerStart;
    return(
        <View style={styles.buttonWrapper}>
            <TouchableHighlight underlayColor='#ddd' onPress={this.handleLapReset.bind(this)} style={styles.button}>
                <Text>{ (mainTimerStart && !isRunning) ? 'Reset': 'Lap'}</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#ddd' onPress={this.handleStartStop.bind(this)} style={styles.button}>
                <Text style={[styles.startBtn, isRunning && styles.stopBtn]}>{isRunning ? 'Stop': 'Start'}</Text>
            </TouchableHighlight>

        </View>
    )
}
_renderLaps() {
    return(
        <View style={styles.lapsWrapper}>
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={ (rowData) =>(
                    <View style={styles.lapRow}>
                        <Text style={styles.lapNumber}>{rowData.name}</Text>
                        <Text style={styles.lapTime}>{rowData.value}</Text>
                    </View>
                )}
                />                
        </View>
    );
}
render() {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                {this._renderTitle()}
                {this._renderTimers()}
            </View>
            <View style={styles.bottom}>
                {this._renderButtons()}
                {this._renderLaps()}
            </View>
        </View>
    )
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
    lapsWrapper: {
        flex:1
    },
    lapRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        paddingTop: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
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