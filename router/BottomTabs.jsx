import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favoris from "../screenq/Favoris";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favoris" component={Favoris} />
    </Tab.Navigator>
  );
}
