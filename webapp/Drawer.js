/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

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
  Home.propTypes = {
    focus: PropTypes.shape({
      focused: PropTypes.bool.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      toggleDrawer: PropTypes.func.isRequired
    }).isRequired
  };
  Home.navigationOptions = {
    title: 'Home',
    drawerIcon: () => <Ionicons name="md-home" size={24} color="blue" />
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.navigate('Profile');
        }}
      >
        Bouffe ta gamelle
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
const Profile = props => {
  Profile.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      toggleDrawer: PropTypes.func.isRequired
    }).isRequired
  };
  Profile.navigationOptions = {
    title: 'Profile',
    drawerIcon: () => <Ionicons name="md-person" size={24} color="blue" />
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.paragraph}
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      >
        Bouffe ta gamelle le rémois
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
  Profile
});
const Appcontainer = createAppContainer(navigator);
const Drawer = () => <Appcontainer />;
export default Drawer;
