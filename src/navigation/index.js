import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../screens/cart';
import UpdateQuantity from '../screens/cart/UpdateQuantity';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="updateQuantity"
        component={UpdateQuantity}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
