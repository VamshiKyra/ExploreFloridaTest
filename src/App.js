import React, { Component } from "react";
import Router from "./Router";
import { View, Platform, PermissionsAndroid } from "react-native";

class App extends Component {
  componentDidMount() {
    async function requestPermissions() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location services");
        } else {
          console.log("permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
    if (Platform.OS === "ios") {
      navigator.geolocation.requestAuthorization();
    } else {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 20 : 0 }}>
        <Router />
      </View>
    );
  }
}
export default App;
