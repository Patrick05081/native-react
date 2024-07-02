import { Text, Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/pat.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Patrick Tajaran</ThemedText>
      
      </ThemedView>
      
      <Text>
        <Text style={styles.idk}>Product Manager</Text>
      </Text>
      
      <Text>
        <Text style={styles.idk}>About Me</Text>
        
      </Text>
  
      <Text>
        <Text style={styles.t}>My name is Patrick Tajaran and I do many different sports like srla, Cross Country, and Volleyball. I am currently enrolled in Orthopeheadic Medical Magnet high school and will be graduating in June of 2027. I have a huge passion for business and would like to own and run a huge buisness in the future. I have an interest in music and is currently learning how to play the piano and guitar.</Text>
        
      </Text>
      

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 290,
    width: 290,
    bottom: 0,
    left: 65,
    borderRadius: 100,
   
  },
  idk:{
    fontSize: 30,
    left: 55,
  },
  t:{
    fontSize: 22,
    left: 15,
  }
  
});
