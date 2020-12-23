import React from "react";
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import ExploreNavContainer from "../navigation-containers/ExploreNavContainer";
import EventsNavContainer from "../navigation-containers/EventsNavContainer";

const Tab = createMaterialBottomTabNavigator();

function BottomNavContainer() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#ba0c2f" barStyle={styles.bottomNav}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} name="home" size={26} />,
        }}
      />
      <Tab.Screen name="Explore" component={ExploreNavContainer} 
        options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} name="magnify" size={26} />,
        }}
      />
      <Tab.Screen name="Events" component={EventsNavContainer} 
        options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} name="calendar" size={26} />,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} name="account" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: '#ffffff'
  }
});

export default BottomNavContainer;
