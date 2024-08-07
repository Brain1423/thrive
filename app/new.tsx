import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet, Pressable } from 'react-native';
import Router, {useRouter} from 'expo-router'



const HomeScreen = () => {
  const  router = useRouter()

  return (
    <View style={styles.container}>
    <View style={styles.blue}>
      <Text style={styles.welcomeText}>Welcome, Benito</Text>
  
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.findCoursesButton} onPress={() => router.push('/home')}>
          <Text style={styles.buttonText}>Find Courses</Text>
        </Pressable>
        <TouchableOpacity style={styles.myCoursesButton}>
          <Text style={styles.buttonText}>My Courses</Text>
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView contentContainerStyle={styles.coursesContainer}>
      
        {coursesData.map((course, index) => (
          <View key={index} style={styles.courseCard}>
            <Pressable>
            <ImageBackground source={{ uri: course.image }} style={styles.image}>
              <View style={styles.overlay}>
                <Text style={styles.courseTitle}>{course.title}</Text>
              </View>
            </ImageBackground>
            </Pressable>
          </View>
        ))}
        
      </ScrollView>
     
    </View>
  );
};

const coursesData = [
  { title: 'Compute Science', image: 'https://miro.medium.com/v2/resize:fit:870/0*ojIU84VO1XMGIn6_.jpg' },
  { title: 'UI/UX Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysfjLLa7cJnCDfJRBL48zqmHujG2nyFzFVQ&s' },
  { title: 'Graphic Designer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ79L7KlDHYjAyJ2oAnDRXTPvBcxMZmsFcg&s' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#EEA044',
    padding: 10
  },
  findCoursesButton: {
    backgroundColor: '#FFE5B4',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  myCoursesButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  coursesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  courseCard: {
    width: '48%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  courseTitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navButton: {
    padding: 10,
  },
  blue: {
    backgroundColor: '#2B5492',
    padding: 20,


  }
});

export default HomeScreen;
