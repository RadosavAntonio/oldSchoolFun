import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Config from 'react-native-config'

const MainInit = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>{Config.ENV}</Text>
    </View>
  )
}

export const Main = memo(MainInit)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
