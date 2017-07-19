import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, AlertIOS } from 'react-native';
import MapView, { MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';
import * as _ from 'lodash';

const { width, height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;

export default class CustomMapView extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			crimeData: null,
			location: null,
			error: null
		};
		this.onMarkerTouch = this.onMarkerTouch.bind(this);
	}

	componentDidMount() {

		// get all crime data from city of seattle
		fetch('https://data.seattle.gov/resource/pu5n-trf4.json')
			.then((response) => {
				return response.json();
			})
			.then((crimeData) => {
				this.setState({
					...this.state,
					crimeData: crimeData
				});
			})
			.catch((err) => {
				console.log(err);
			});

		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				...this.state,
				location: position.coords
			}, (error) => {
				this.setState({
					...this.state,
					error: error
				});
			});
		});
	}

	get mapType() {
    // MapKit does not support 'none' as a base map
    return this.props.provider === PROVIDER_DEFAULT ?
      MAP_TYPES.STANDARD : MAP_TYPES.NONE;
  }

	onMarkerTouch(event) {
		AlertIOS.alert('You tapped a marker.');
		console.log('Hello!');
	}

  render() {

    return (
      <MapView
        initialRegion={{
          latitude: 47.6062,
          longitude: -122.33321,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        style={styles.map}
      >
			<MapView.UrlTile urlTemplate={this.props.url} zIndex={-1}/>
				{this.state.crimeData ?
					_.map(this.state.crimeData, (crime, i) => {

						return <MapView.Circle onPress={this.onMarkerTouch} center={{latitude: crime.incident_location.coordinates[1], longitude: crime.incident_location.coordinates[0]}}
						key={i} radius={75} strokeWidth={1} fillColor="rgba(213, 75, 65, 0.75)" strokeColor="rgb(255, 255, 255)" />;
					}) : null}
				{this.state.location ? <MapView.Marker onPress={this.onMarkerTouch} coordinate={{latitude: this.state.location.latitude, longitude: this.state.location.longitude}} /> : null}
			</MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
		...StyleSheet.absoluteFillObject
  },
	dashboard: {
		height: 80,
		width: screenWidth,
		backgroundColor: '#000',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	iconContainer: {
		height: 80,
		width: screenWidth / 4,
		padding: 5,
		backgroundColor: '#6C7680',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	dashboardText: {
		color: '#FFFFFF'
	}
});
