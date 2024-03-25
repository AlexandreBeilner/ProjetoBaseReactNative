import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
      <Tab.Screen name={"Home"} component={Home} />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  return(
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  )
}
