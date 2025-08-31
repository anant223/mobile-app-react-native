import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardtwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Green</Text>
        </View>
        
      </View>
    </View>
  );
}

export default FlatCards

const styles = StyleSheet.create({
  container : {flexDirection: "row", flex: 1, padding: 8},

  headingText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: "#fff"
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardtwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  text: {
    color: "#fff"
  }
});