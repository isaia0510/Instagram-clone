import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const {width} = Dimensions.get('window');
const ITEM_SIZE = width / 3;

export default function GridItem({ source, onPress}) {
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.container}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    padding: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
});