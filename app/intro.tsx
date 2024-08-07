import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Pressable,
  LogBox,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import Router, { useRouter } from 'expo-router'


const introScreen = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Css Intro Course</Text>
      <View style={styles.box}></View>
      <View style={styles.container2}>
        <Text >
          Discover the basics of CSS in our beginner-friendly course, where you
          will learn to style web pages effectively. From understanding
          selectors to creating layouts and adding colors and animations, you'll
          gain practical skills. By the end, you will feel confident using CSS
          to design visually appealing websites for various purposes.
        </Text>
      </View>
      <Pressable 
      style={styles.button}
      onPress={() => router.push('/skill')}
      >
        <Text style={styles.text}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 30,
    marginBottom: 40
  },
  box: {
    width: 380,
    height: 200,
    backgroundColor: "grey",
    borderRadius: 20
  },
  container2: {
    alignContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop:  40
  },
  button: {
    backgroundColor: '#b5b5b5',
    width: 300,
    height: 40,
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
    borderWidth: 0.6,
    marginTop: 200,
  },
  text: {
    marginTop: 10
  }

});

export default introScreen;
