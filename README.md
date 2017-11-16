# react-native-demo
A simple demo application for geospatial apps built using React Native.

## Installation
This project was bootstrapped using [create-react-native-app](https://facebook.github.io/react-native/docs/getting-started.html). To install:

```
git clone https://github.com/parkerziegler/react-native-demo.git
cd react-native-demo
yarn install
```

If using the Expo XDE, you may get a warning something like the following:
> Warning: Not using the Expo fork of react-native. See https://docs.expo.io.

You can optionally configure your build to use the Expo fork by simply specifiying your `react-native` dependency in `package.json`:

```
"dependencies": {
  "react-native": "https://github.com/expo/react-native/archive/sdk-20.0.0.tar.gz"
}
```

Check out [this Stack Overflow post](https://stackoverflow.com/questions/45187220/not-using-the-expo-fork-of-react-native) for details.

## About
This project is mostly a staging environment for me to experiment with React Native and geospatial visualization in particular. The project takes advantage of an [amazing open data repository available from the City of Seattle](https://data.seattle.gov/), looking at police responses to 911 calls across the city. Coming features will allow you to filter the data, switch basemaps, search for specific locations, visualize the data in graphs, navigate across screens, and more.

## Contributing
Please fork and star this project if you're interested in contributing. I'm generally pretty responsive to pull requests and issues and am happy to help you get up and running. Feel free to ping me on Twitter: @parker_ziegler.
