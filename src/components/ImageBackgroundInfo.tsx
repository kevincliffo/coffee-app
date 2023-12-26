import { ImageBackground, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ImageBackgroundInfoProps {
    EnableBackHandler:boolean;
    imageLink_portrait:ImageProps;
    type:string;
    id:string;
    favorite:boolean;
    name:string;
    special_ingredient:string;
    ingredients:string;
    average_rating:number;
    ratings_count:string;
    roasted:string;
    Backhandler?:any;
    ToggleFavorite:any;
};

const ImageBackgroundInfo:React.FC<ImageBackgroundInfoProps> = ({
    EnableBackHandler,
    imageLink_portrait,
    type,
    id,
    favorite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    Backhandler,
    ToggleFavorite}) => {
  return (
    <View>
      <ImageBackground 
        source={imageLink_portrait}
        style={styles.itemBackgroundImage}
        >

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    itemBackgroundImage:{
        width:'100%',
        aspectRatio:20/25,
        justifyContent:'space-between'
    }
})

export default ImageBackgroundInfo
