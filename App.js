import React from 'react';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const COLORS = {primary: '#1f145c', white: '#fff'};

const App = () => {
  return(
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: COLORS.primary }}>
          To do for dev
        </Text>
      </View>
    </SafeAreaView>
  ); 
};

const styles = StyleSheet.create({});

export default App;
