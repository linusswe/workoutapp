/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WeatherScreen from '../screens/WeatherScreen';
import FoodScreen from '../screens/FoodScreen';
import TempScreen from '../screens/TempScreen';


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    }, 
     Temp: {
      screen: TempScreen,
    },
    Weather: {
      screen: WeatherScreen,
    },   
   
    
    Food: {
      screen: FoodScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Links':
            iconName = 'heartbeat';
            break;
          case 'Settings':
            iconName = 'cog';
            break;
          case 'Weather':
            iconName = 'cloud';
            break;
          case 'Food':
            iconName = 'pie-chart';
            break;
          case 'Temp':
            iconName = 'hourglass';
        }
        return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: false,
    },
  }
);
