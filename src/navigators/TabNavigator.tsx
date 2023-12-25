import React from 'react'
import { StyleSheet } from 'react-native'
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import OrderHistory from '../screens/OrderHistory';
import CustomIcon from '../components/CustomIcon';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown:false, 
      tabBarHideOnKeyboard:true, 
      tabBarShowLabel:false,
      tabBarStyle:styles.tabBarStyle,
      tabBarBackground:() => (
        <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyle}>

        </BlurView>
      ),}}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{tabBarIcon:({focused, color, size}) =>(
            <CustomIcon
              name="home"
              size={15}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )}}>
        </Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen} 
          options={{tabBarIcon:({focused, color, size}) =>(
            <CustomIcon
              name="cart"
              size={15}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )}}></Tab.Screen>
        <Tab.Screen name="Favorite" component={FavoriteScreen} 
          options={{tabBarIcon:({focused, color, size}) =>(
            <CustomIcon
              name="like"
              size={15}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )}}></Tab.Screen>
        <Tab.Screen name="History" component={OrderHistory} 
          options={{tabBarIcon:({focused, color, size}) =>(
            <CustomIcon
              name="bell"
              size={15}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
            />
          )}}></Tab.Screen>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  tabBarStyle:{
    height:80,
    position:'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth:0,
    elevation:0,
    borderTopColor:'transparent'
  },
  blurViewStyle:{
    top:0,
    left:0,
    bottom:0,
    right:0,
    position:'absolute',
  }
})
export default TabNavigator