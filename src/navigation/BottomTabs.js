/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Home from '../screens/home';
import Contact from '../screens/contact';

const Tab = createBottomTabNavigator();

export default function BottomTabs({navigation}) {
  const SCREEN_OPTIONS = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
  };

  const CustomTabIcon = ({name}) => {
    return <Text style={styles.text}>{name}</Text>;
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          ...SCREEN_OPTIONS,
          tabBarStyle: styles.tabHeight,
        }}>
        <Tab.Screen
          name="contact"
          component={Contact}
          options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <CustomTabIcon name={'Contact'} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Home}
          options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => (
              <CustomTabIcon name={'Add'} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 13, width: '40%'},
});
