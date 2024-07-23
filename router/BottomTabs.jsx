import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favoris from "../screenq/Favoris";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      {/* <Tab.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Tab.Screen name="Favoris" component={Favoris} />
    </Tab.Navigator>
  );
};

export default MyTabs;
