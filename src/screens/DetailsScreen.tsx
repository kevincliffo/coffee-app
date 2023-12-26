import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { COLORS } from '../theme/theme';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({navigation, route}:any) => {
  const itemOfIndex = useStore((state:any) => 
    route.params.type == "Coffee" ? state.CoffeeList : state.BeanList
  )[route.params.index];

  const BackHandler = () => {
    navigation.pop();
  }
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
          <ImageBackgroundInfo 
            EnableBackHandler={true}
            imageLink_portrait={itemOfIndex.imagelink_portrait}
            type={itemOfIndex.type}
            id={itemOfIndex.id}
            favorite={itemOfIndex.favorite}
            name={itemOfIndex.name}
            special_ingredient={itemOfIndex.special_ingredient}
            ingredients={itemOfIndex.ingredients}
            average_rating={itemOfIndex.average_rating}
            ratings_count={itemOfIndex.ratings_count}
            roasted={itemOfIndex.roasted}
            Backhandler={BackHandler}
            ToggleFavorite={() => {}} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex,
  },
  scrollViewFlex:{
    flexGrow:1,
  }
})
export default DetailsScreen