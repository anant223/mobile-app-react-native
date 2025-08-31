import { View, Text, StyleSheet, Image, Linking, Button } from 'react-native'
import React from 'react'

const ActionCard = () => {
    const handleLinking = (webLink: string) => {
      Linking.openURL(webLink)
    }
  return (
    <View>
      <Text style={styles.headerText}>Blog Post</Text>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={{paddingVertical: 8, fontSize: 22, color: '#fff', fontWeight: '700'}}>
            What's happing near you?
          </Text>
          <View>
            <Image
              style={styles.img}
              source={{
                uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ba/4d/95/happening.jpg?w=1100&h=600&s=1',
              }}
              alt=""
            />
          </View>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Button onPress={() => handleLinking("https://www.google.com")} title="Learn More"/>
        </View>
      </View>
    </View>
  );
}

export default ActionCard


const styles = StyleSheet.create({
  headerText: {
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
  desc: {
    fontSize: 14,
    paddingVertical: 8,
    color: '#fff',
  },
  cardBody: {
    backgroundColor: '#2e2869',
    borderRadius: 8,
    padding: 8,
  },
});