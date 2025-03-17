import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { HapticTab } from '../../components/HapticTab';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'PRODUTOS',
          tabBarIcon: ({ color }) => <Ionicons name="storefront-outline" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PERFIL',
          tabBarIcon: ({ color }) => <FontAwesome6 name="user" size={24} color={color}/>,
        }}
      />

      <Tabs.Screen
        name="product"
        options={{
          tabBarButton: () => null
        }}
      />
    </Tabs>
  );
}
