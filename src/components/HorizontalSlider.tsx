import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import { MoviePosterCard } from './MoviePosterCard';

interface Props{
    title?:string,
    movies:Movie[]
}
export const HorizontalSlider = ({title,movies}:Props) => {
  return (
   <View style={{height:(title)? 240 : 240}
   }>
     <Text style={{fontSize:30,fontWeight: 'bold',marginStart:10}}>{title}</Text>
        <FlatList
          data={movies}
          renderItem ={({item}:any) => <MoviePosterCard movie={item} width={140} height={200}/>}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

   </View>
  )
}
