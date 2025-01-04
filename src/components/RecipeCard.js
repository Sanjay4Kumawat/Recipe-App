import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, { borderColor: recipe.color }]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image source={recipe.image} style={styles.image} />
      <View style={[styles.info, { backgroundColor: `${recipe.color}15` }]}>
        <Text style={[styles.title, { color: recipe.color }]}>{recipe.name}</Text>
        <View style={styles.details}>
          <Text style={styles.detailText}>⏱ {recipe.prepTime}</Text>
          <Text style={styles.detailText}>👨‍🍳 {recipe.difficulty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  info: {
    padding: 15,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    color: '#666',
    fontSize: 14,
  },
});

export default RecipeCard; 