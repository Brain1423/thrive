import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, StyleSheet,  } from 'react-native';
import Router, {useRouter} from 'expo-router'

const App = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
    <View style={styles.blue}>
      <Text style={styles.welcomeText}>Welcome, Benito</Text>
  
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.findCoursesButton}>
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myCoursesButton} onPress={() => router.push('/near')}>
          <Text style={styles.buttonText}>Near</Text>
        </TouchableOpacity>
      </View>
      </View>
      <ScrollView contentContainerStyle={styles.coursesContainer}>
        {jobData.map((job, index) => (
          <View key={index} style={styles.courseCard}>
            <ImageBackground source={{ uri: job.image }} style={styles.image}>
              <View style={styles.overlay}>
                <Text>{job.money}</Text>
                <Text style={styles.courseTitle}>{job.title}</Text>
                <Text style={styles.subtitle}>{job.location.one}</Text>
                <Text style={styles.text}>{job.location.two}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
     
    </View>

  );
};

const jobData = [
  {money: '$30/h-25/h', title: 'Middle UI/UX Designer', location: {one: 'Los Angeles', two: 'Canada', three: 'texas'}, image: 'https://fronty.com/static/uploads/design_vs.jpg' },
  {money: '$30/h-25/h', title: 'Boxing Instructor', location: {one: 'Los Angeles', two: 'Canada', three: 'texas'}, image: 'https://alecpenix.com/wp-content/uploads/2022/06/IMG_3450.jpg' },
  {money: '$30/h-25/h', title: 'Art Director', location: {one: 'Los Angeles', two: 'Canada', three: 'texas'}, image: 'https://i.ytimg.com/vi/BsK3tFH8-9k/sddefault.jpg' },
  {money: '$30/h-25/h', title: 'Architect', location: {one: 'Los Angeles', two: 'Canada', three: 'texas'}, image: 'https://vin-yet.com/wp-content/uploads/2023/09/architects-working-on-a-blueprint.jpg' },
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
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  myCoursesButton: {
    backgroundColor: '#FFE5B4',
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
    marginTop: 5
  },
  text: {
    fontSize: 18,
    color: '#fff',
    margin: 10
  },
  
});

export default App;
