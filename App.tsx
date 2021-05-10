/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

//TODO Failed to load fonts via expo fonts, sticking to basic for now

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from  'styled-components';
import {NavigationContainer} from "@react-navigation/native";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants.screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeArea} from './src/features/restaurants/components/utility/safe.area.component';
import {theme} from "./src/infrastructure/Theme";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
    return (
        <SafeArea>
            <Text>Settings!</Text>
        </SafeArea>
    );
};


const MapScreen = () => {
    return (
        <SafeArea>
            <Text>Map!</Text>
        </SafeArea>
    );
};

const App = () => {
    return (

        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Restaurants" component={RestaurantScreen}/>
                    <Tab.Screen name="Map" component={MapScreen}/>
                    <Tab.Screen name="Settings" component={SettingsScreen}/>
                </Tab.Navigator>
            </NavigationContainer>

        </ThemeProvider>
    );
};

export default App;
