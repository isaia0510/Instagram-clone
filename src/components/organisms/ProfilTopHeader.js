import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/color';
import MyText from '../atoms/MyText';

export default function ProfilTopHeader({ username }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="add-outline" size={35} color={COLORS.text_primary} />
            </TouchableOpacity>

            <MyText type="bold" style={styles.username}>
                {username}
            </MyText>

            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="menu" size={35} color={COLORS.text_primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: COLORS.primary_color,
    },
    username: {
        paddingTop: 10,
        fontSize: 17
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});