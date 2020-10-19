import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';
/*
=======in view style======= 
style={{
  backgroundColor: 'yellow',
  margin: 10,
  padding: 10,
  textAlign: 'center',
  justifyContent: 'space-between',
}}
*/

const App = () => {
  const my_name = 'eryilmaz';
  function adminFunction() {
    const isAdmin = true;
    return isAdmin ? <Text style={{fontSize: 40}}>Admin</Text> : null;
  }
  function myFunction() {
    return 'Yusuf';
  }
  // function cities() {
  //   const myArray = ['Toronto', 'Ottawa', 'Quebec'];
  //   return myArray.map((city) => {
  //     return <Text style={{fontSize: 30}}>{city}</Text>;
  //   });
  // }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>~YUSUF~</Text>
      </View>
      <MyComponent />
      <Text style={styles.hello}>{my_name + ' ' + (1990 + 4)}</Text>
      {adminFunction()}
      {true && <Text style={{fontSize: 40}}>Admin</Text>}
      <Text>{myFunction()}</Text>
      {/* {cities()}  */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hello: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
  },
});

export default App;
