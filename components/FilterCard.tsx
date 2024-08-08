import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface FilterCardProps {
  handleLeftText: () => void;
  handleRightText: () => void;
  rightSide: boolean;
  leftText: string;
  rightText: string;
}

const FilterCard: React.FC<FilterCardProps> = ({
  handleLeftText,
  handleRightText,
  rightSide,
  leftText,
  rightText,
}) => {
  const styles = StyleSheet.create({
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
    nearCoursesButton: {
      backgroundColor: !rightSide ? "#FFB26B" : "#F08D1B",
      padding: 15,
      borderRadius: 13,
      width: "50%",
      alignItems: "center",
    },
    newJobsButton: {
      backgroundColor: rightSide ? "#FFB26B" : "#F08D1B",
      padding: 15,
      borderRadius: 13,
      width: "45%",
      alignItems: "center",
    },
    buttonText: {
      fontWeight: "bold",
      fontSize: 15,
    },
  });

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.newJobsButton} onPress={handleLeftText}>
        <Text style={styles.buttonText}>{leftText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nearCoursesButton}
        onPress={handleRightText}
      >
        <Text style={styles.buttonText}>{rightText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterCard;
