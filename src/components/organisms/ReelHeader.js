import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/color';
import MyText from '../atoms/MyText';

export default function ReelHeader({ text }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="add-outline" size={35} color={COLORS.primary_color} />
            </TouchableOpacity>

            <MyText type="bold" style={styles.text}>
                Reels
            </MyText>

            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={35} color={COLORS.primary_color} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    text: {
        fontSize: 20,
        color: COLORS.primary_color
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});