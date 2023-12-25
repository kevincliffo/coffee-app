import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import OrderHistory from '../screens/OrderHistory';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarHideOnKeyboard:true, tabBarShowLabel:false}}>
        <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen}></Tab.Screen>
        <Tab.Screen name="Favorite" component={FavoriteScreen}></Tab.Screen>
        <Tab.Screen name="History" component={OrderHistory}></Tab.Screen>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({})
export default TabNavigator