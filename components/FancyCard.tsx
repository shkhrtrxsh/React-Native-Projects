import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View >
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
<Image source={{
    uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
}} style={styles.cardImage}/>
<View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Hawa Mahal</Text>
    <Text style={styles.cardLabel}>Pink City, jaipur</Text>
    <Text style={styles.cardDescription}>The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation.</Text>
    <Text style={styles.cardFooter}>12 mins away</Text>
</View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
      },
      card: {
        width:350,
        height:360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
   },
      cardElevated: {
         backgroundColor: '#FFFFFF',
         elevation:3,
         shadowOffset: {
            width:1,
            height:1
         }
      },
      cardImage: { height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
    },
      cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
      },
      cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
      },
      cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
      },
      cardFooter: {},
})