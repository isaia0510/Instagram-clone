import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/color';

export default function PaginationDots({ total, currentIndex }) {
  if (total <= 1) return null;

  const dots = Array.from({ length: total });

  return (
    <View style={styles.container}>
      {dots.map((_, index) => {
        const isActive = index === currentIndex;
        return (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: isActive ? COLORS.unread : '#D3D3D3',
                transform: [{ scale: isActive ? 1.2 : 1 }],
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 3,
  },
});