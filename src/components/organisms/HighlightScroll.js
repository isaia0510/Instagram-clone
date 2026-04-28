import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HighlightItem from '../molecules/HighlightItem';
import MyText from '../atoms/MyText';
import { COLORS } from '../../theme/color';

export default function HighlightScroll({ highlights }) {
    const AddHighlightButton = () => (
        <TouchableOpacity style={styles.addBtnContainer} activeOpacity={0.8}>
        <View style={styles.circleAdd}>
            <Ionicons name="add" size={30} color={COLORS.text_primary} />
        </View>
        <MyText type='regular' style={styles.addTitle}>New</MyText>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={highlights}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={AddHighlightButton} 
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                <HighlightItem 
                    title={item.title} 
                    image={item.image} 
                />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  listContent: {
    paddingHorizontal: 15,
  },
  addBtnContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  circleAdd: {
    width: 63, 
    height: 63,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: COLORS.highlight_color,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary_color,
  },
  addTitle: {
    marginTop: 5,
    fontSize: 12,
    color: COLORS.text_primary,
  },
});