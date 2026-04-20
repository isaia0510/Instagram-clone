import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/color';

export default function Badge({ size = 14}) {
    return(
        <View style={styles.container}>
            <Ionicons
                name="checkmark-circle"
                size={size}
                color={COLORS.unread}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4
    }
});