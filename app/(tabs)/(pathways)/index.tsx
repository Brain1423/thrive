import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Router, { router, useRouter } from "expo-router";
import FilterCard from "@/components/FilterCard";
import PathwaysCard from "@/components/cards/PathwaysCard";

const HomeScreen = () => {
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
  const handleCardPress = () => {
    console.log("Pathways card Pressed");
    router.push("skillTree");
  };

  const styles = StyleSheet.create({
    container: {
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
      marginTop: 15,
    },
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcomeText}>Pathways</Text>

        <FilterCard
          handleLeftText={handleMyPathways}
          handleRightText={handleFindPathways}
          leftText="My Pathways"
          rightText="Find Pathways"
          rightSide={findPathways}
        />
      </View>

      <ScrollView contentContainerStyle={styles.coursesContainer}>
        {findPathways
          ? coursesData.map((course, index) => (
              <PathwaysCard
                key={index}
                course={course}
                handleCardPress={handleCardPress}
              />
            ))
          : coursesData
              .slice(0, 3)
              .map((course, index) => (
                <PathwaysCard
                  key={index}
                  course={course}
                  handleCardPress={handleCardPress}
                />
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
