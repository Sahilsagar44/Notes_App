import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddNoteScreen from './../screens/AddNoteScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="AddNoteScreen" component={AddNoteScreen}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;