import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFavorites } from '../context/FavoritesContext';

const { width } = Dimensions.get('window');

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(recipe.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={recipe.image} style={styles.image} />
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(recipe)}
        >
          <Icon 
            name={favorite ? 'heart' : 'heart-outline'} 
            size={28} 
            color={favorite ? '#FF6B6B' : '#fff'} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>{recipe.name}</Text>
        
        <View style={styles.infoRow}>
          <InfoItem icon="⏱" text={`Prep: ${recipe.prepTime}`} />
          <InfoItem icon="🍳" text={`Cook: ${recipe.cookTime}`} />
          <InfoItem icon="👥" text={`Serves: ${recipe.servings}`} />
        </View>

        <Section title="Ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.listItem}>
              • {ingredient}
            </Text>
          ))}
        </Section>

        <Section title="Instructions">
          {recipe.instructions.map((instruction, index) => (
            <Text key={index} style={styles.listItem}>
              {index + 1}. {instruction}
            </Text>
          ))}
        </Section>
      </View>
    </ScrollView>
  );
};

const InfoItem = ({ icon, text }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoIcon}>{icon}</Text>
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 300,
  },
  favoriteButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    borderRadius: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: '#333',
  },
});

export default RecipeDetailScreen; 