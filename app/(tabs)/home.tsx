import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Router, { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  const [findPathways, setFindPathways] = useState(true);
  const [myPathways, setMyPathways] = useState(false);
  const handleMyPathways = () => {
    setFindPathways(false);
    setMyPathways(true);
    console.log("My Pathways");
  };

  const handleFindPathways = () => {
    setMyPathways(false);
    setFindPathways(true);
    console.log("Find Pathways");
  };

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      //padding: 10,
      backgroundColor: "#fff",
      height: "100%",
    },
    welcomeText: {
      fontFamily: "Arial",
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 60,
      marginBottom: 15,
    },
    buttonsContainer: {
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "center",

      backgroundColor: "#FFB26B",
      paddingTop: 5,
      paddingBottom: 5,
      width: 396,
      borderRadius: 13,
    },
    myCoursesButton: {
      backgroundColor: myPathways ? "#FFB26B" : "#F08D1B",
      padding: 15,
      borderRadius: 13,
      width: "45%",
      alignItems: "center",
    },
    findCoursesButton: {
      backgroundColor: findPathways ? "#FFB26B" : "#F08D1B",
      padding: 15,
      borderRadius: 13,
      width: "45%",
      alignItems: "center",
    },
    buttonText: {
      fontWeight: "bold",
      fontSize: 15,
    },
    coursesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      // justifyContent: "space-between",
      justifyContent: "center",
      // padding: 10,
      marginRight: 0,
      marginTop: 15,
    },
    courseCard: {
      height: 202,
      width: 172,
      marginBottom: 24,
      marginRight: 10,
      marginLeft: 10,
    },
    image: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      overflow: "hidden",
    },
    overlay: {
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    courseTitle: {
      fontSize: 17,
      color: "#fff",
      textAlign: "center",
      bottom: 15,
      position: "absolute",
      fontWeight: "700",
      width: 110,
    },
    navContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: "#ccc",
    },
    navButton: {
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Pathways</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.findCoursesButton}
            onPress={handleMyPathways}
          >
            <Text style={styles.buttonText}>My Pathways</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myCoursesButton}
            // onPress={() => router.replace("/new")}
            onPress={handleFindPathways}
          >
            <Text style={styles.buttonText}>Find Pathways</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.coursesContainer}>
        {findPathways
          ? coursesData.map((course, index) => (
              <View key={index} style={styles.courseCard}>
                <Pressable>
                  <ImageBackground
                    source={{ uri: course.image }}
                    style={styles.image}
                  >
                    <View style={styles.overlay}>
                      <Text style={styles.courseTitle}>{course.title}</Text>
                    </View>
                  </ImageBackground>
                </Pressable>
              </View>
            ))
          : coursesData.slice(0, 3).map((course, index) => (
              <View key={index} style={styles.courseCard}>
                <Pressable>
                  <ImageBackground
                    source={{ uri: course.image }}
                    style={styles.image}
                  >
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
  {
    title: "Animation",
    image: "https://explain.ninja/wp-content/uploads/2022/08/animart.webp",
  },
  {
    title: "Computer Science",
    image: "https://miro.medium.com/v2/resize:fit:870/0*ojIU84VO1XMGIn6_.jpg",
  },
  {
    title: "Aerospace Engineering",
    image: "https://www.planitplus.net/JobProfileImages/69.png",
  },
  {
    title: "Finance",
    image:
      "https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg",
  },
  {
    title: "Electrical Engineering",
    image:
      "https://www.mtu.edu/gradschool/programs/degrees/electrical-engineering/images/electrical-engineering-banner1600.jpg",
  },
  {
    title: "Architecture",
    image:
      "https://topdot.ca/images/blogImages/choose-an-architecture-firm-in-toronto/Featured.jpg",
  },
];

export default HomeScreen;
