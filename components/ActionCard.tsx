import { Text, StyleSheet, View, Linking, Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class ActionCard extends Component {
  render() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
              <View style={styles.headingContainer}><Text
                style={styles.headerText}>
                lorem, epsum
                </Text></View> 
                 <Image source={{
            uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
         
        }}style={styles.cardImage}/>
        <View style={styles.cardContainer}>
<Text numberOfLines={3}>
Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</Text>
        </View>
        <View style={styles.footerContainer}>
            <View style={styles.socialLinks}>
            <TouchableOpacity onPress={() => openWebsite('https://www.google.com')}>
            <Text>Read More</Text>
        </TouchableOpacity>    
            </View>
        
        
        <View style={styles.socialLinks}>
        <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/shkhrmishraa/')}>
            <Text>Follow Me</Text>
        </TouchableOpacity>
        </View></View>
            </View>
        
        
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
card:{
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
},
elevatedCard:{
    backgroundColor: '#E07C24',
    elevation:3,
    shadowOffset: {
        width:1,
        height:1
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
},
headingContainer:{
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
headerText:{
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
},
cardImage:{height:190},
cardContainer:{
    padding: 10
},
footerContainer:{
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
socialLinks:{
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
},
})
