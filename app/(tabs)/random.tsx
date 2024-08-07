import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="search" />

      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tabButton, styles.newTab]}>
          <Text style={styles.tabText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, styles.nearTab]}>
          <Text style={styles.tabText}>Near</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.jobList}>
        <View style={styles.jobItem}>
          <Image source={require('@/assets/images/computer.png')} style={styles.jobImage} />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Middle UI/UX Designer</Text>
            <Text style={styles.jobRate}>$30/h-25/h</Text>
            <View style={styles.jobTags}>
              <Text style={styles.tag}>Los Angeles</Text>
              <Text style={styles.tag}>Canada</Text>
              <Text style={styles.tag}>IT</Text>
            </View>
          </View>
        </View>

        <View style={styles.jobItem}>
          <Image source={require('@/assets/images/person.png')} style={styles.jobImage} />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Boxing Instructor</Text>
            <Text style={styles.jobRate}>$20/h-25/h</Text>
            <View style={styles.jobTags}>
              <Text style={styles.tag}>Los Angeles</Text>
              <Text style={styles.tag}>San Diego</Text>
              <Text style={styles.tag}>Instructor</Text>
            </View>
          </View>
        </View>

        <View style={styles.jobItem}>
          <Image source={require('@/assets/images/face.png')} style={styles.jobImage} />
          <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>Art Director</Text>
            <Text style={styles.jobRate}>$35/h-40/h</Text>
            <View style={styles.jobTags}>
              <Text style={styles.tag}>Los Angeles</Text>
              <Text style={styles.tag}>San Jose</Text>
              <Text style={styles.tag}>Art Director</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
  },
  newTab: {
    backgroundColor: '#ffff99',
  },
  nearTab: {
    backgroundColor: '#d3d3d3',
  },
  tabText: {
    fontWeight: 'bold',
  },
  jobList: {
    flex: 1,
  },
  jobItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  jobImage: {
    width: '100%',
    height: 150,
  },
  jobInfo: {
    padding: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobRate: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  jobTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    fontSize: 24,
  },
});

export default App;
