import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import MapView, { MAP_TYPES, PROVIDER_DEFAULT } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster';
import * as _ from 'lodash';
import { storeCrimeData } from '../../actions/mapActions';

const { width, height } = Dimensions.get('window');
const screenWidth = width;
const screenHeight = height;

class CustomMapView extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			location: null,
			error: null
		};
		this.onMarkerTouch = this.onMarkerTouch.bind(this);
	}

	componentDidMount() {

		const { maps, dispatch } = this.props;

		// get all crime data from city of seattle
		fetch('https://data.seattle.gov/resource/pu5n-trf4.json')
			.then((response) => {
				return response.json();
			})
			.then((crimeData) => {
				
				dispatch(storeCrimeData({ crimeData }));
			})
			.catch((err) => {
				console.log(err);
			});

		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				location: position.coords
			}, (error) => {
				this.setState({
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
	}

	renderMarker = (data) => <MapView.Marker key={data.key} coordinate={data.location} />;

  render() {

		const { maps } = this.props;
		const { location } = this.state;
		const data = maps.crimeData.map(crime => {

			return {
				key: crime.cad_cdw_id,
				location: {
					latitude: parseFloat(crime.latitude),
					longitude: parseFloat(crime.longitude)
				}
			};
		});

    return (
      <ClusteredMapView
        initialRegion={{
          latitude: 47.6062,
          longitude: -122.33321,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
				}}
				data={data}
				style={styles.map}
				textStyle={{ color: "white" }}
				renderMarker={this.renderMarker}
        containerStyle={{backgroundColor: "rgba(213, 75, 65, 0.75)", borderColor: "white"}}
      >
			<MapView.UrlTile urlTemplate={this.props.url} zIndex={-1}/>
				{/* {maps.crimeData ?
					_.map(maps.crimeData, (crime, i) => {

						return <MapView.Circle onPress={this.onMarkerTouch} center={{latitude: crime.incident_location.coordinates[1], longitude: crime.incident_location.coordinates[0]}}
						key={i} radius={75} strokeWidth={1} fillColor="rgba(213, 75, 65, 0.75)" strokeColor="rgb(255, 255, 255)" />;
					}) : null} */}
			</ClusteredMapView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

	return {
		maps: state.mapReducer,
		provider: ownProps.provider,
		url: ownProps.url
	};
};

export default connect(mapStateToProps)(CustomMapView);

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
