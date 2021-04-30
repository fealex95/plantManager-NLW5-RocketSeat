import React, { useEffect } from 'react'
import { Confirmation } from './src/pages/Confirmation'
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'
import * as Notifications from 'expo-notifications'

import Routes from './src/routes'

import AppLoading from 'expo-app-loading'


export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant
        console.log(data)
      }
    )

    return () => subscription.remove();
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Routes />
  );
}