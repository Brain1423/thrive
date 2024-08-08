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
import JobsCard from "@/components/cards/JobsCard";
import FilterCard from "@/components/FilterCard";

const App = () => {
  const router = useRouter();

  const [newJobs, setNewJobs] = useState(true);
  const [nearJobs, setNearJobs] = useState(false);
  const handleNewJobs = () => {
    setNearJobs(false);
    setNewJobs(true);
    console.log("My Pathways");
  };

  const handleNearJobs = () => {
    setNewJobs(false);
    setNearJobs(true);
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

    coursesContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginRight: 0,
      marginTop: 30,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Jobs</Text>

        <FilterCard
          handleLeftText={handleNewJobs}
          handleRightText={handleNearJobs}
          rightSide={nearJobs}
          leftText="New"
          rightText="Near"
        />
      </View>

      <ScrollView contentContainerStyle={styles.coursesContainer}>
        {nearJobs
          ? jobData.map((course, index) => (
              <JobsCard key={index} course={course} />
            ))
          : jobData
              .slice(0, 3)
              .map((course, index) => <JobsCard key={index} course={course} />)}
      </ScrollView>
    </View>
  );
};

const jobData = [
  {
    money: "$30/h-25/h",
    title: "Middle UI/UX Designer",
    location: { one: "Los Angeles", two: "Canada", three: "texas" },
    image: "https://fronty.com/static/uploads/design_vs.jpg",
  },
  {
    money: "$30/h-25/h",
    title: "Boxing Instructor",
    location: { one: "Los Angeles", two: "Canada", three: "texas" },
    image: "https://alecpenix.com/wp-content/uploads/2022/06/IMG_3450.jpg",
  },
  {
    money: "$30/h-25/h",
    title: "Art Director",
    location: { one: "Los Angeles", two: "Canada", three: "texas" },
    image: "https://i.ytimg.com/vi/BsK3tFH8-9k/sddefault.jpg",
  },
  {
    money: "$30/h-25/h",
    title: "Architect",
    location: { one: "Los Angeles", two: "Canada", three: "texas" },
    image:
      "https://vin-yet.com/wp-content/uploads/2023/09/architects-working-on-a-blueprint.jpg",
  },
];

export default App;
