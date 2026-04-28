import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GridItem from '../molecules/GridItem';

export default function PhotoGrid({ photos }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <GridItem 
            source={item.images[0]} 
            onPress={() => console.log('Photo cliquée:', item.id)} 
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3} 
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});