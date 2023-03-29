import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie:Movie,
    height?:number,
    width?:number

}


export const MoviePosterCard = ({movie,height = 400,width =300}:Props) => {

    const uri =  `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`

    const navigation = useNavigation()

  return (
    <TouchableOpacity 
    onPress={ () =>navigation.navigate('DetailsScreen',movie)}
    activeOpacity={0.7}
    style={{
        width,
        height,
        marginHorizontal:2,
        paddingBottom:20,
        paddingHorizontal:7
    }}>
         <View style={styles.imageContainer} >
        <Image source={{uri}}
        style={styles.image}
        />
    </View>
    </TouchableOpacity>
   
  )
}

const styles = StyleSheet.create({

    image:{
        flex:1,
        borderRadius:20
    },
    imageContainer:{
        flex:1,
        borderRadius:50,
        shadowColor:'gray',
        shadowOpacity:0.5,
        shadowRadius:1,
        elevation:10
       }
})