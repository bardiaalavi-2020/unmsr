import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Events from "./../screens/Events";
import EventDetails from "./../screens/EventDetails";

import ScreenHeader from "./../custom-components/ScreenHeader";

const Stack = createStackNavigator();

// TODO: use redux to pass data to Detiails screen
// headerMode="none"

const EventsNavContainer = () => {
  return(
    <Stack.Navigator initialRouteName="EventsHome" > 
      <Stack.Screen name="EventsHome" component={Events} 
        options={{
          headerShown: false,
          // headerTitle: props => <ScreenHeader {...props} />
        }}
      />
      <Stack.Screen name="EventDetails" component={EventDetails} 
        options={{
          title: "",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default EventsNavContainer;