import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favoris from "../screenq/Favoris";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Favoris" component={Favoris} />
    </Tab.Navigator>
  );
};

export default Tabs;
