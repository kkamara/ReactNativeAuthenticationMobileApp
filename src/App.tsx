import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { NavigationContainer, } from "@react-navigation/native"
import { createNativeStackNavigator, } from '@react-navigation/native-stack'
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'

import home from "./screens/home"
import login from "./screens/login"
import Context from "./context"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarIconStyle: { display: "none" },
            }}
        >
            <Tab.Screen
                name="Home"
                component={home}
            />
            <Tab.Screen
                name="Login"
                component={login}
            />
        </Tab.Navigator>
    )
}

export default function App(): React.JSX.Element {
    return (
        <Context>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='bottomtabs'>
                    <Stack.Screen options={{
                    headerShown: false,
                    }} name="bottomtabs" component={BottomTabs} />                
                </Stack.Navigator>
            </NavigationContainer>
        </Context>
    )
}