import React, { FC } from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation'
import Header from './components/header'

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <Header />
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  )
}

export default App
