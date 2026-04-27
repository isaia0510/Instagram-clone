import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/color';

import LogoImg from '../../../assets/logo_text.png';

export default function HomeHeader() {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="add-outline" size={35} color={COLORS.text_primary} />
            </TouchableOpacity>

            <Image 
                source={LogoImg} 
                style={styles.logo} 
                resizeMode="contain" 
            />

            <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={35} color={COLORS.text_primary} />
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
    logo: {
        paddingTop: 10,
        width: 120,
        height: 90,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});