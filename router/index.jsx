import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./BottomTabs";

const stack = createStackNavigator();

const IndexRoutes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{ headerShown: false }}
      >
        <stack.Screen name="MyTabs" component={MyTabs} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexRoutes;
