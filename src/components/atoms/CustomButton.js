import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { COLORS } from '../../theme/color';
import MyText from './MyText';

export default function CustomButton({
    title,
    onPress,
    type = 'primary',
    size = 'medium',
    style
}) {
    const isSecondary = type == 'secondary';
    const backgroundColor = isSecondary ? COLORS.button_secondary : COLORS.buttom_edit_profil;
    const textColor = isSecondary ? 'primary_color' : 'text_primary';
    const paddingVertical = size === 'small' ? 5 : size === 'large' ? 12 : 8;

    return(
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.button,
                { backgroundColor, paddingVertical},
                style
            ]}
        >
            <MyText
                type='medium'
                color={textColor}
            >
                {title}
            </MyText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    text: {
        fontSize: 14
    }
});