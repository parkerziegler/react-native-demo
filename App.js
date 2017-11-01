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
    // Search: {
    //   screen: Search,
    //   navigationOptions: {
    //     tabBarLabel: 'Search',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Icon
    //         name={focused ? 'ios-search' : 'ios-search-outline'}
    //         size={26}
    //         style={{ color: tintColor }} />
    //     )
    //   }
    // },
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
    // Locate: {
    //   screen: Locate,
    //   navigationOptions: {
    //     tabBarLabel: 'Locate',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Icon
    //         name={focused ? 'ios-ionic' : 'ios-ionic-outline'}
    //         size={26}
    //         style={{ color: tintColor }} />
    //     )
    //   }
    // },
    // Basemaps: {
    //   screen: Main, // DrawerNavigator(
    //   //   {
    //   //     Basemaps: {
    //   //       screen: Main
    //   //     }
    //   //   },
    //   //   {
    //   //     contentComponent: () => <View><Text>Opened up!</Text></View>
    //   //   }
    //   // ),
    //   navigationOptions: {
    //     tabBarLabel: 'Basemaps',
    //     tabBarIcon: ({ tintColor, focused }) => <MaterialIcon
    //       name='layers'
    //       size={26}
    //       style={{ color: tintColor }} />
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

const AppNavigator = DrawerNavigator(
  {
    Tabs: {
      screen: Tabs
    }
  },
  {
    contentComponent: () => <View><Text>I'm open!</Text></View>
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
