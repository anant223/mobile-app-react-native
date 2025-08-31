import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_red_fort_l_341_817.jpg',
            }}
            alt="delhi-img"
          />
          <View>
            <Text style={styles.title}>Red Fort</Text>
            <Text style={styles.desc}>
              The Red Fort, also known as Lal Qila, is one of the most iconic
              monuments of India, located in the heart of Old Delhi. Built by
              the Mughal emperor Shah Jahan in 1648, it served as the main
              residence of the Mughal rulers for almost 200 years.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: '#fff',
  },
  card: {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    padding: 12,
    flex: 1,
  },
  img: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardElevated: {
    backgroundColor: '#f2f2f2',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  desc: {
    fontSize: 14,
    paddingVertical: 4,
  },
  cardBody: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8
  }
});