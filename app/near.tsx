import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet,  } from 'react-native';
import Router, {useRouter} from 'expo-router'

const near = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
    <View style={styles.blue}>
      <Text style={styles.welcomeText}>Welcome, Benito</Text>
  
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.findCoursesButton} onPress={() => router.push('/explore')}>
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myCoursesButton} >
          <Text style={styles.buttonText}>Near</Text>
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView contentContainerStyle={styles.coursesContainer}>

        {coursesData.map((course, index) => (
          <View key={index} style={styles.courseCard}>
            <ImageBackground source={{ uri: course.image }} style={styles.image}>
              <View style={styles.overlay}>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <Text style={styles.subtitle}>{course.location}</Text>
                <Text style={styles.text}>{course.description}</Text>

              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
     
    </View>
  );
};

const coursesData = [
    { title: 'Animation', image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp', location: 'Location: South LA', description: 'Cal Arts are preparing safe, creative, and fun workshop for children  find their creative passions ' },
    { title: 'Self-Defense', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&s', location: 'Location: South LA', description: 'Cal Arts are preparing safe, creative, and fun workshop for children  find their creative passions '  },
    { title: 'CSS Course', image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp', location: 'Location: South LA', description: 'Cal Arts are preparing safe, creative, and fun workshop for children  find their creative passions '  },
    { title: 'Finance', image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp', location: 'Location: South LA', description: 'Cal Arts are preparing safe, creative, and fun workshop for children  find their creative passions '  },
    { title: 'Animation', image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp', location: 'Location: South LA', description: 'Cal Arts are preparing safe, creative, and fun workshop for children  find their creative passions '  },
    { title: 'Self-Defense', image: 'https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp', location: 'Location: South LA', description: 'Cal Arts are preparing safe, creative, and fun workshop for children  find their creative passions '  },
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
    //flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  courseCard: {
    width: '48%',
    marginBottom: 10,
  },
  image: {
    width: 370,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  courseTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    //textAlign: 'center',
    margin: 10
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
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    
  },
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  }
});

export default near;
