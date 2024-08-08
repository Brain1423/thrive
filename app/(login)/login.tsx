import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { View, Text } from 'react-native';
import Router, { useRouter } from  'expo-router'
const logoImg = require('@/assets/images/logo.png')

export default function HomeScreen() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image 
        source={logoImg} 
        style={styles.logo}
        />
      </View>
      <View>
        <Pressable style={styles.button}
        onPress = {() => router.push('/home')}
        >
          <Text style={styles.text} >Sign Up</Text>
        </Pressable>
        <Pressable style={styles.button2}
        onPress = {() => router.push('/home')}>
          <Text style={styles.text} >Login</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.thrive}>Thrive</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  container2: {
    marginTop: 100
  },
  logo: {
    width: 100,
    height: 100,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 500,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 250,
    borderWidth: 0.6,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 500,
    elevation: 3,
    backgroundColor: 'BAC3CE',
    marginTop: 15,
    borderWidth: 0.6,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  thrive: {
    marginTop: 250,
  }
});
