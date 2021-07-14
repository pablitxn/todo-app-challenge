import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabAll, TabCompleted, TabFavorite, TabUncompleted } from './tabs'

const BottomTab = createBottomTabNavigator<any>()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="all">
      <BottomTab.Screen name="all" component={TabAll} />
      <BottomTab.Screen name="completed" component={TabCompleted} />
      <BottomTab.Screen name="favorite" component={TabFavorite} />
      <BottomTab.Screen name="uncompleted" component={TabUncompleted} />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
