import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {COLORS} from '../../theme/color';
import MyText from '../atoms/MyText';
import Avatar from '../atoms/Avatar';

export default function NoteBubble({ user, note, onPress}) {
    const truncatedNote = note.length > 25 ? note.substring(0, 22) + '...' : note;

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.9}
        >
            <View style={styles.bubble}>
                <MyText style={styles.noteText}>
                    {truncatedNote}
                </MyText>
            </View>

            <Avatar source={user.image} size="medium"/>

            <MyText style={styles.username}>
                {user.username}
            </MyText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 90,
        marginHorizontal: 5,
        marginTop: 20, 
    },
    bubble: {
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        position: 'absolute',
        top: -30, 
        zIndex: 2,
        elevation: 3,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        maxWidth: 100,
    },
    noteText: {
        fontSize: 11,
        textAlign: 'center',
        color: COLORS.text_primary,
    },
    bubbleTail: {
        position: 'absolute',
        bottom: -6,
        left: '40%',
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: COLORS.primary_color, 
    },
    username: {
        marginTop: 8,
        fontSize: 11,
        color: COLORS.text_secondary,
    }
});