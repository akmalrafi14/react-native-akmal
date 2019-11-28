import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Ham } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Login";
import { ScrollView } from 'react-native-gesture-handler';

import Banner from "./Banner";
import Stats from "./Stats";
import ScrollImage from "./ScrollImage";
import Content from "./Content";

class App extends React.Component {
  render() {

    const userdata = this.props.navigation.getParam("userdata");
    // console.log(userdata)

    return (
      <View
        style={{
          height: "100%"
        }}
      >
        <View style={{
          elevation: 4,
          height: 80,
          paddingTop: 24,
          backgroundColor: "#f39c12",
          flexDirection: "row",
          alignItems: "center"
        }}>
          <Image
            source={Ham}
            style={{
              marginLeft: 10,
              height: 30,
              width: 30
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              flex: 1,
              color: "white",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >My Home :D</Text>
        </View>
        <ScrollView
          style={{ flex: 1 }}
        >
          <Banner userdata={{ userdata }} />
          <Stats userdata={{ userdata }} />
          <ScrollImage userdata={{ userdata }} />
          <Content />
        </ScrollView>
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: App, // Login
    navigationOptions: {
      header: null
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(Navigator);
