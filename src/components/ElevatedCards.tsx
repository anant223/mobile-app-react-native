import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>👍🏻</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>👋🏼</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😄</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>zzx🫢</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>🤑</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default ElevatedCards

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: '#fff',
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    margin: 2,
  },
  cardElevated: {backgroundColor: 'gray', elevation: 4},
  container: {padding: 8},
});


