import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/color';
import MyText from './MyText';

export default function InputLine({
    label,
    placeholder,
    defaultValue,
    onChangeText,
    ...props
}) {
    return(
        <View style={styles.container}>
            {label && (
                <MyText style={styles.label}>{label}</MyText>
            )}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS.text_secondary}
                selectionColor={COLORS.unread}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.secondary_color,
    },
    input : {
        flex: 1,
        fontSize: 16,
        color: COLORS.text_primary,
        paddingRight: 10,
    },
    label: {
        width: 100, 
        fontSize: 16,
    }
});