import React from 'react'
import {View, ScrollView, Text, Image, StyleSheet, Pressable} from 'react-native'
import Router, { useRouter } from 'expo-router'

const skillTree = () => {
  const router = useRouter()

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}> 
        <Pressable
        onPress={() => router.push('/video')}
        >
          <Image 
          source={require('@/assets/images/Css.jpg')} 
          style={styles.image}
          />
          <View style={styles.button2}>
          <Text style={styles.btnText}>Css Intro Course</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  container2: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  
  },
 
  btnText: {
    textAlign: 'center',
    marginTop: 13
  },
  button2: {
    backgroundColor: '#b5b5b5',
    width: 170,
    height: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  image: {
    width: 170,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  }
})

export default skillTree