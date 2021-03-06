import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyOrdersScreen, ProfileScreen } from "./index";
import { CustomTabBar } from "../Components";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      // initialRouteName={'MyOrdersScreen'}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
        component={HomeScreen} />
      <Tab.Screen
        name="MyOrdersScreen"
        options={{ title: 'My orders' }}
        component={MyOrdersScreen} />
      <Tab.Screen
        name="ProfileScreen"
        options={{ title: 'Profile' }}
        component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
