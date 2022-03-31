import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { StyleSheet, useColorScheme } from 'react-native'

import { Provider } from 'react-redux'
import { lightTheme, darkTheme } from './src/config/theme'
import Routes from './src/config/routes'
import { store } from './src/config/store'

import './src/config/initTranslation'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
})

export default App
