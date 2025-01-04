import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Create a stack navigator for Favorites
const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FavoritesScreen"
      component={FavouritesScreen}
      options={{
        title: 'Favorites',
        headerStyle: {
          backgroundColor: '#FF6B6B',
        },
        headerTintColor: '#fff',
      }}
    />
    <Stack.Screen
      name="RecipeDetail"
      component={RecipeDetailScreen}
      options={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecipeDetail"
      component={RecipeDetailScreen}
      options={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favourites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF6B6B',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Favourites" 
          component={FavoritesStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#FF6B6B',
            },
            headerTintColor: '#fff',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 