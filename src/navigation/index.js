import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../screens/cart';
import UpdateQuantity from '../screens/cart/UpdateQuantity';
import BottomTabs from './BottomTabs';
import LoginScreen from '../screens/auth';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  const isLoggedIn = useSelector(state => state.auth.login);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <Stack.Screen
          name="home"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="auth"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      )}

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
