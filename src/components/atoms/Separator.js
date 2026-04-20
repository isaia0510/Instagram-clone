import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/color';

export default function Separator({ style }) {
  return (
    <View style={[styles.line, style]} />
  );
}

const styles = StyleSheet.create({
    line: {
        height: 0.5,
        backgroundColor: COLORS.secondary_color,
        width: '100%',
    }
});