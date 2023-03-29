import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

const valueheight = Dimensions.get('screen').height
interface Props extends StackScreenProps<RootStackParams,'DetailsScreen'>{}
export const DetailsScreen = ({route}:Props) => {
  const movie = route.params

  const uri =  `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`


  return (
    <View style={styles.ImageContainer}>
        <Image source={{uri}}
        style={styles.posterImage}
        />
         <Text>Hola estoy probando</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
    
  posterImage:{
    flex:1
  },
  ImageContainer:{
    width:'100%',
    height: valueheight * 0.7
  }
})
