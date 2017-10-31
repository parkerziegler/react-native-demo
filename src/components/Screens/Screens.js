import React from 'react';
import { View, Text } from 'react-native';

// some stateless functional components for our Drawer Navigator
export const Filter = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Filter</Text>
  </View>
);

export const Search = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Basemap Switch</Text>
  </View>
);

export const Analytics = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Basemap Switch</Text>
  </View>
);

export const Locate = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Basemap Switch</Text>
  </View>
);

export const Basemaps = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Basemap Switch</Text>
    </View>
);