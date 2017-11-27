import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import { store } from './index';
import { Platform, View, Text } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import { Filter, Search, Analytics, Locate, Basemaps } from './src/components/Screens/Screens';
import DashboardIcon from './src/components/Dashboard/DashboardIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BasemapMenu from './src/components/BasemapMenu/BasemapMenu';

const Tabs = TabNavigator(
  {
    Map: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-map' : 'ios-map-outline'}
            size={26}
            style={{ color: tintColor }} />
        )
      }
    },
    Filter: {
      screen: Filter,
      navigationOptions: {
        tabBarLabel: 'Filter',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-color-filter' : 'ios-color-filter-outline'}
            size={26}
            style={{ color: tintColor }} />
        )
      }
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: {
        tabBarLabel: 'Analytics',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-analytics' : 'ios-analytics-outline'}
            size={26}
            style={{ color: tintColor }} />
        )
      }
    }
  }, {
    initialRouteName: 'Map',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    tabBarOptions: {
      activeTintColor: '#FFF',
      style: {
        backgroundColor: '#000'
      }
    }
  }
);

const AppNavigator = DrawerNavigator(
  {
    Tabs: {
      screen: Tabs
    }
  },
  {
    contentComponent: BasemapMenu
  }
);

export default class App extends React.Component {

  render() {

		return (
      <Provider store={store}>
				<AppNavigator />
			</Provider>
    );
  }
}
