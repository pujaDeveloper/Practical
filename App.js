import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

//navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { Routes } from './src/utils/Routes';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./src/redux/reducers/index";
const store = createStore(rootReducer);

//pages
import PhotoList from './src/layouts/PhotoList';
import PhotoDetails from './src/layouts/PhotoDetails';

const MainNavigator = createStackNavigator(
  {
    [Routes.PhotoList]: { screen: PhotoList },
    [Routes.PhotoDetails]: { screen: PhotoDetails }

  },
  {
    initialRouteName: Routes.PhotoList,
    headerMode: "none",
    mode: "card"
  }
);

const RootNavigator = createAppContainer(MainNavigator);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    }
  }

  componentDidMount() {
  }

  render() {
    const { isConnected } = this.state;
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator screenProps={{ isConnected: isConnected }} />
      </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
