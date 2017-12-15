import React from 'react';
import { View, Text, Flat } from 'react-native';

// some stateless functional components for our Navigator
export const Filter = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Filter</Text>
  </View>
);

export const Search = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Search</Text>
  </View>
);

export const Analytics = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Analytics</Text>
  </View>
);

export const Locate = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Locate</Text>
  </View>
);

export const Basemaps = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Basemap Switch</Text>
    </View>
);