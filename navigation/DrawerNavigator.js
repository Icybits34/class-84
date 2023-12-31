import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import StoryScreen from "../screens/StoryScreen"
import StackNavigator from "./StackNavigator"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
