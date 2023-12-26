import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBGIcon from './GradientBGIcon';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';

interface ImageBackgroundInfoProps {
    EnableBackHandler:boolean;
    imageLink_portrait:ImageProps;
    type:string;
    id:string;
    favourite:boolean;
    name:string;
    special_ingredient:string;
    ingredients:string;
    average_rating:number;
    ratings_count:string;
    roasted:string;
    Backhandler?:any;
    ToggleFavourite:any;
};

const ImageBackgroundInfo:React.FC<ImageBackgroundInfoProps> = ({
    EnableBackHandler,
    imageLink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    ratings_count,
    roasted,
    Backhandler,
    ToggleFavourite}) => {
  return (
    <View>
      <ImageBackground 
        source={imageLink_portrait}
        style={styles.itemBackgroundImage}
        >
            { EnableBackHandler? (
                <View style={styles.imageHeaderBarContainerWithBack}>
                    <TouchableOpacity onPress={() => Backhandler()}>
                        <GradientBGIcon 
                            name='left' 
                            color={COLORS.primaryLightGreyHex}
                            size={FONTSIZE.size_16}
                        /> 
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => {
                            ToggleFavourite(favourite, type, id);
                        }}
                    >
                        <GradientBGIcon 
                            name='like' 
                            color={favourite ? COLORS.primaryRedHex: COLORS.primaryLightGreyHex}
                            size={FONTSIZE.size_16}
                        /> 
                    </TouchableOpacity>
                </View>
            ): (
                <View style={styles.imageHeaderBarContainerWithoutBack}>
                    <TouchableOpacity 
                        onPress={() => {
                            ToggleFavourite(favourite, type, id);
                        }}
                    >
                        <GradientBGIcon 
                            name='like' 
                            color={favourite ? COLORS.primaryRedHex: COLORS.primaryLightGreyHex}
                            size={FONTSIZE.size_16}
                        /> 
                    </TouchableOpacity>
                </View>
            )}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    itemBackgroundImage:{
        width:'100%',
        aspectRatio:20/25,
        justifyContent:'space-between'
    },
    imageHeaderBarContainerWithBack:{
        padding: SPACING.space_30,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
    },
    imageHeaderBarContainerWithoutBack:{
        padding: SPACING.space_30,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'flex-end'
    }
})

export default ImageBackgroundInfo
