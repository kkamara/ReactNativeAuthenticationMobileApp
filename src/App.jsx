import React, { useContext, } from 'react'
import { NavigationContainer, } from "@react-navigation/native"
import { createNativeStackNavigator, } from '@react-navigation/native-stack'
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'

import home from "./screens/home"
import login from "./screens/login"
import AuthContext, { Context, } from "./context"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    const { authenticated, } = useContext(Context)

    console.log(authenticated)
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
        <AuthContext>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='bottomtabs'>
                    <Stack.Screen options={{
                    headerShown: false,
                    }} name="bottomtabs" component={BottomTabs} />                
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext>
    )
}