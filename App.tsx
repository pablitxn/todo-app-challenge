import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './navigation'
import Header from './components/header'

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Header />
        <Navigation />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
