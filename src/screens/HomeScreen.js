import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList, 
  SafeAreaView, 
  TextInput,
  StatusBar 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredRecipes = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <RecipeCard
      recipe={item}
      onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF6B6B" barStyle="light-content" />
      
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#666"
        />
      </View>

      <FlatList
        data={filteredRecipes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingVertical: 8,
  },
});

export default HomeScreen; 