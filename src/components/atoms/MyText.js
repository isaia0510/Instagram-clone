import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/color';

export default function MyText(
    { 
        children,
        type='regular',
        color=COLORS.text_primary,
        style,
        ...props
    }
){
    const getTextStyle = () => {
        switch(type) {
            case 'bold': 
                return styles.bold;
            case 'medium':
                return styles.medium;
            case 'light':
                return styles.light;
            default:
                return styles.regular;
        }
    }

    const textColor = COLORS[color] || color;

    return(
        <Text
            style={[getTextStyle(), { color: textColor }, style]}
            {...props}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    regular: {
    fontSize: 14,
    fontWeight: '400',
  },
  bold: {
    fontSize: 14,
    fontWeight: '700',
  },
  medium: {
    fontSize: 14,
    fontWeight: '600',
  },
  light: {
    fontSize: 12,
    fontWeight: '300',
  },
});