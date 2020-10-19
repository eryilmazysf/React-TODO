import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Hello Welcome</Text>
      <View>
        <Text>Are you ready to be Full Stack Developer</Text>
      </View>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
});
