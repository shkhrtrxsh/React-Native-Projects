import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark';
    return (
        
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello!</Text>
            </View>
        
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default AppPro