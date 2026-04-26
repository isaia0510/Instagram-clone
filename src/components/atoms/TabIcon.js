import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/color';

export default function TabIcon({ name, isActive, onPress}) {
    return(
        <TouchableOpacity
            style={[styles.container, isActive && styles.activeContainer]} 
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Ionicons 
                name={name} 
                size={24} 
                color={isActive ? COLORS.text_primary : '#ADADAD'} 
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent', 
    },
    activeContainer: {
        borderBottomColor: COLORS.text_primary, 
    },
});