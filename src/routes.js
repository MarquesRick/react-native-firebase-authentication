import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Login from './views/Login';
import Create from './views/Create';
import Main from './views/Main';

export default function Route() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Create" component={Create} />
        <Tab.Screen name="Main" component={Main} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}