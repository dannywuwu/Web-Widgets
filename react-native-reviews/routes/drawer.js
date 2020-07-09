import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack'
import AboutStack from './aboutStack'

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="HomeStack">
                <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
                <Drawer.Screen name="About" component={AboutStack}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootDrawerNavigator