import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputLine from '../atoms/InputLine';
import Separator from '../atoms/Separator';
import {COLORS} from '../../theme/color';

export default function EditRow({ label, defaultValue, placeholder, onChangeText}) {
    return(
        <View style={styles.container}>
            <InputLine
                label={label}
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: COLORS.primary_color,
        paddingHorizontal: 15
    }
});