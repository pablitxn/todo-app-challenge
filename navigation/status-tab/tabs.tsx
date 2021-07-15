import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import All from '../../screens/all'
import All from '../../screens/create-task'
import Completed from '../../screens/completed'
import Favorite from '../../screens/favorite'
import Uncompleted from '../../screens/uncompleted'

const TabAllStack = createStackNavigator<any>()
const TabCompletedStack = createStackNavigator<any>()
const TabFavoriteStack = createStackNavigator<any>()
const TabUncompletedStack = createStackNavigator<any>()

export const TabAll: FC = () => {
  return (
    <TabAllStack.Navigator>
      <TabAllStack.Screen
        name="TabOneScreen"
        component={All}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabAllStack.Navigator>
  )
}

export const TabCompleted: FC = () => {
  return (
    <TabCompletedStack.Navigator>
      <TabCompletedStack.Screen
        name="completed"
        component={Completed}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabCompletedStack.Navigator>
  )
}

export const TabFavorite: FC = () => {
  return (
    <TabFavoriteStack.Navigator>
      <TabFavoriteStack.Screen
        name="favorite"
        component={Favorite}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabFavoriteStack.Navigator>
  )
}

export const TabUncompleted: FC = () => {
  return (
    <TabUncompletedStack.Navigator>
      <TabUncompletedStack.Screen
        name="uncompleted"
        component={Uncompleted}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabUncompletedStack.Navigator>
  )
}
