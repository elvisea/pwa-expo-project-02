import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "./pages/Main";
import Search from "./pages/Search";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={18} color={color} />
            ),
          }}
          name="Início"
          component={Main}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={18} color={color} />
            ),
          }}
          name="Busca"
          component={Search}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="file-text" size={18} color={color} />
            ),
          }}
          name="Pedidos"
          component={Requests}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={18} color={color} />
            ),
          }}
          name="Perfil"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
