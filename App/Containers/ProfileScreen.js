import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = (props) => {
  return <View style={styles.container}>
    <Text>ProfileScreen</Text>
  </View>
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})
