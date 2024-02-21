


import React from 'react';


import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import { CameraComponent } from './Components/CamerComponent';
import { UserDetails } from './Components/UserDetails';
const Stack = createNativeStackNavigator();





function App(){

  return (<NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CameraComponent" component={CameraComponent} />
        <Stack.Screen name="UserDetails" component={UserDetails} />

      </Stack.Navigator>
    </NavigationContainer>
  
  );
}



export default App;
