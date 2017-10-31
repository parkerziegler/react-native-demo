import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import { store } from './index';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Filter, Search, Analytics, Locate, Basemaps } from './src/components/Screens/Screens';
import DashboardIcon from './src/components/Dashboard/DashboardIcon';
import Icon from 'react-native-vector-icons/Ionicons';

const AppNavigator = TabNavigator(
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
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-search' : 'ios-search-outline'}
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
    },
    Locate: {
      screen: Locate,
      navigationOptions: {
        tabBarLabel: 'Locate',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-ionic' : 'ios-ionic-outline'}
            size={26}
            style={{ color: tintColor }} />
        )
      }
    },
    // Basemaps: {
    //   screen: Basemaps,
    //   navigationOptions: {
    //     tabBarLabel: 'Basemaps',
    //     tabBarIcon: () => <DashboardIcon name='ios-map-outline' text='Basemaps' />
    //   }
    // },
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

export default class App extends React.Component {

  render() {

		return (
      <Provider store={store}>
				<AppNavigator />
			</Provider>
    );
  }
}
