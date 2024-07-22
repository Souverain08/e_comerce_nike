import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./BottomTabs";

const stack = createStackNavigator();

const IndexRoutes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="tabs" component={Tabs} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexRoutes;
