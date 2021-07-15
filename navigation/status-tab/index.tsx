import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TabAll, TabCompleted, TabFavorite, TabUncompleted } from './tabs'

const TopTab = createMaterialTopTabNavigator<any>()

const BottomTabNavigator = () => {
  return (
    <TopTab.Navigator initialRouteName="all">
      <TopTab.Screen name="all" component={TabAll} />
      <TopTab.Screen name="completed" component={TabCompleted} />
      <TopTab.Screen name="favorite" component={TabFavorite} />
      <TopTab.Screen name="uncompleted" component={TabUncompleted} />
    </TopTab.Navigator>
  )
}

export default BottomTabNavigator
