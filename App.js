import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container, {
        backgroundColor: "#bdc3c7",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Text style={{
          fontSize: 24,
          paddingBottom: 24,
          fontWeight: "600",
        }}>App Title Here :D</Text>
        <Text>Hello World!</Text>
        <Text>This is my first app!</Text>

        <Button onPress={() => {
          this.props.navigation.navigate("Login");
        }}
          title="Click Me" ></Button>
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
    screen: App,
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
