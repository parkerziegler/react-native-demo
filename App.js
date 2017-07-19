import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomMapView from './src/components/CustomMapView';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { map } from 'lodash';

const dashboardIcons = [{
	name: 'ios-color-filter-outline',
	text: 'Filter'
}, {
	name: 'ios-search',
	text: 'Search'
}, {
	name: 'ios-analytics',
	text: 'Analytics'
}, {
	name: 'ios-ionic',
	text: 'Locate'
}, {
	name: 'ios-map-outline',
	text: 'Basemap'
}];

export default class App extends React.Component {

	constructor() {
		super();
		this.state = { url: "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png" };
		this.setBasemap = this.setBasemap.bind(this);
	}

	setBasemap() {

		if (this.state.url === "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png") {
			this.setState({
				url: "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
			});
		} else {
			this.setState({
				url: "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png"
			});
		}

	}

  render() {

		let dashboardItems = dashboardIcons.map((icon, i) => {
			return (
				<View style={styles.buttonContainer} key={i}>
					<Icon name={icon.name} color="#FFFFFF" size={50} />
					<Text style={styles.buttonText}>{icon.text}</Text>
				</View>
			);
		});

		return (
      <View style={styles.container}>
          <CustomMapView provider='PROVIDER_DEFAULT' url={this.state.url}/>
					<View style={styles.dashboard}>
						{dashboardItems}
					</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  scrollview: {
    alignItems: 'center',
		flex: 1
  },
	dashboard: {
    flexDirection: 'row',
    backgroundColor: '#000'
  },
	buttonContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		borderColor: '#FFF'
	},
	buttonText: {
		color: '#FFFFFF'
	}
});
