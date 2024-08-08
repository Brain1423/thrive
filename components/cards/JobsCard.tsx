import React from "react";
import {
  View,
  Pressable,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";

interface JobCardProps {
  course: {
    image: string;
    money: string;
    title: string;
    location: {
      one: string;
      two: string;
      three: string;
    };
  };
}

const JobsCard: React.FC<JobCardProps> = ({ course }) => {
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

    buttonText: {
      fontWeight: "bold",
      fontSize: 15,
    },
    coursesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginRight: 0,
      marginTop: 30,
    },
    courseCard: {
      height: 160,
      width: 393,
      marginBottom: 24,
      marginRight: 10,
      marginLeft: 10,
      borderRadius: 10,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    jobTitle: {
      fontSize: 26,
      color: "#fff",
      fontFamily: "Arial",
      fontWeight: "700",
      top: 45,
      left: 24,
    },

    jobMoney: {
      fontSize: 18,
      color: "#fff",
      fontFamily: "Arial",
      fontWeight: "400",
      top: 38,
      left: 24,
    },
    locationText: {
      color: "#fff",
      fontFamily: "Khula",
      fontSize: 10,
      fontWeight: "600",
      // textAlign: "center",
    },
    locationContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.22)",
      padding: 4,
      gap: 10,
      borderColor: "#fff",
      borderWidth: 0.5,
      borderRadius: 8,
    },
    locationsContainer: {
      flexDirection: "row",
      left: 24,
      gap: 9,
      top: 55,
    },
  });

  return (
    <View style={styles.courseCard}>
      <Pressable>
        <ImageBackground source={{ uri: course.image }} style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.jobMoney}>{course.money}</Text>
            <Text style={styles.jobTitle}>{course.title}</Text>
            <View style={styles.locationsContainer}>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>{course.location.one}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>{course.location.two}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>{course.location.three}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default JobsCard;
