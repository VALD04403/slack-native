/* eslint-disable arrow-parens */
// import React from 'react';
// import { View } from 'react-native';
// import Drawer from './Drawer';

// function App() {
//   return (
//     <View>
//       <Drawer />
//     </View>
//   );
// }

// export default App;

/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    height: 100
  }
});

// eslint-disable-next-line arrow-parens
const Home = props => {
  // eslint-disable-next-line no-undef
  state = {
    channels: []
  };
  Home.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      toggleDrawer: PropTypes.func.isRequired
    }).isRequired
  };
  Home.navigationOptions = {
    title: 'Home'
  };

  // eslint-disable-next-line no-undef
  getChannels = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch('/api/channels');
    const { channels } = await response.json();
    console.log(response);
    // eslint-disable-next-line react/no-this-in-sfc
    this.setState({ channels });
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      >
        {this.state.channels.map(channel => (
          <Text>
            Go
            {channel.name}
          </Text>
        ))}
      </Text>

      <Text
        style={styles.paragraph}
        onPress={() => {
          // eslint-disable-next-line react/no-this-in-sfc
          this.getChannels();
          props.navigation.toggleDrawer();
        }}
      >
        Open side
      </Text>
    </View>
  );
};

// eslint-disable-next-line arrow-parens
const Profile = props => {
  Profile.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      toggleDrawer: PropTypes.func.isRequired
    }).isRequired
  };
  Profile.navigationOptions = {
    title: 'Profile'
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        Go Home
      </Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      >
        Open side
      </Text>
    </View>
  );
};

// eslint-disable-next-line arrow-parens
const Channels = props => {
  Channels.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      toggleDrawer: PropTypes.func.isRequired
    }).isRequired
  };
  Profile.navigationOptions = {
    title: 'Channels'
  };

  return (
    <View style={styles.container}>
      <Text>Channels</Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        Go Home
      </Text>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.toggleDrawer();
        }}
      >
        Open side
      </Text>
    </View>
  );
};

const navigator = createDrawerNavigator({
  Home,
  Profile,
  Channels
});
const Appcontainer = createAppContainer(navigator);
const Drawer = () => <Appcontainer />;
export default Drawer;
