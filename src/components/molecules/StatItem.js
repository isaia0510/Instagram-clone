import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MyText from '../atoms/MyText';

export default function StatItem({ label, value }) {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <MyText type="bold" style={styles.value}>{value}</MyText>
            <MyText style={styles.label}>{label}</MyText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container : {
        alignItems: 'center',
        flex: 1
    },
    value: {
        fontSize: 18,
    },
    label: {
        fontSize: 13,
        marginTop: 2,
    },
});