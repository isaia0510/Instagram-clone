import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyText from '../../components/atoms/MyText';
import {COLORS} from '../../theme/color';

export default function EditProfileHeader({ onBack }) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onBack}>
                <Ionicons name="chevron-back" size={30} color={COLORS.text_primary} />
            </TouchableOpacity>
            <MyText type="bold" style={styles.title}>Edit profile</MyText>
            <View style={{ width: 30 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dbdbdb',
    },
    title: {
        fontSize: 18,
    },
});