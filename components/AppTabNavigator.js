import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ItemDonateScreen from '../screens/ItemDonateScreen';
import ItemRequestScreen from '../screens/ItemRequestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonateItem: {
        screen: ItemDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-list.png")}
                style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Donate Items"
        }
    },

    ItemRequest: {
        screen: ItemRequestScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/request-book.png")}
                style={{ width: 20, height: 20 }} />,
            tabBarLabel: "Request Items"
        }
    }
})