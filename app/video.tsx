import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, Pressable} from 'react-native'

const VideoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <Pressable>
          <Text style={styles.closebtn}>X</Text>
        </Pressable>
      <Text style={styles.header}>BackEnd Intro</Text>
      </View>
      <View style={styles.video}></View>
      <View style={styles.description}>
        <Text style={styles.desBtn}>Description</Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginLeft: 90,
    marginRight: 90,
  },
  test: {
    flexDirection: 'row',
  },
  closebtn: {
    fontSize: 15,
  },
  video: {
    backgroundColor: 'grey',
    width: 390,
    height: 230,
  },
  description: {
    width: 390,
    height: 80,
    backgroundColor: '#949699',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 10,
  },
  desBtn: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 15,
  },

})

export default VideoScreen