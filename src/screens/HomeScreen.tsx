import { ScrollView, StatusBar, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';

const getcategoriesFromdata = (data:any) => {
  let temp:any = {};

  for(let i=0;i<data.length;i++){
    if(temp[data[i].name] == undefined){
      temp[data[i].name] = 1;
    }else{
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
}

const getCoffeeList = (category: string, data:any) => {
  if(category == 'All'){
    return data;
  } else{
    let coffeeList = data.filter((item:any) => item.name == category);
    return coffeeList;
  }
}
const HomeScreen = () => {
  const CoffeeList = useStore((state:any) => state.CoffeeList);
  const BeanList = useStore((state:any) => state.BeanList);
  const [categories, setCategories] = useState(
    getcategoriesFromdata(CoffeeList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 1,
    category: categories[1]
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  );

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
        {/* App Header */}
        <HeaderBar />

        <Text style={styles.screenTitle}>Find the best{'\n'} coffee for you</Text>

        {/* Search input */}

        <View style={styles.inputContainerComponent}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon 
              style={styles.inputIcon}
              name='search' 
              size={FONTSIZE.size_18} 
              color={searchText.length > 0? COLORS.primaryOrangeHex : COLORS.primaryGreyHex}
            />
          </TouchableOpacity>
          <TextInput 
            placeholder='Find your coffee...' 
            value={searchText} 
            onChangeText={
              text=> setSearchText(text)
            }
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.textInputContainer}
          />
        </View>

        {/* Categories scroller */}
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollViewStyle}>
            {categories.map((data, index) => (
              <View
                key={index.toString()}
                style={styles.categoryScrollViewContainer}>
                <TouchableOpacity 
                  style={styles.categoryScrollViewItem}
                  onPress={() => {
                    setCategoryIndex({index:index, category:categories[index]});
                    setSortedCoffee(getCoffeeList(categories[index], CoffeeList));
                  }}>
                  <Text 
                    style={[styles.categoryText, categoryIndex.index == index? {color: COLORS.primaryOrangeHex}: {}]}>
                      {data}
                  </Text>
                  {categoryIndex.index == index ? (<View style={styles.activeCategory}/>): (<></>)}
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  scrollViewFlex: {
    flexGrow: 1
  },
  screenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_bold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  },
  textInputContainer: {
    flex:1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  },
  inputIcon: {
    marginHorizontal: SPACING.space_20,

  },
  inputContainerComponent: {
    flexDirection:'row',
    margin:SPACING.space_30,
    borderRadius:BORDERRADIUS.radius_20,
    backgroundColor:COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  categoryScrollViewStyle: {
    paddingHorizontal:SPACING.space_20,
    marginBottom: SPACING.space_20
  },
  categoryScrollViewContainer: {
    paddingHorizontal:SPACING.space_15,
  },
  categoryScrollViewItem: {
    alignItems:'center'
  },
  activeCategory: {
    height:SPACING.space_10,
    width:SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4
  }
})
export default HomeScreen