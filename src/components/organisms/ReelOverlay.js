import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../atoms/Avatar';
import MyText from '../atoms/MyText';
import PostActions from '../molecules/PostActions';

export default function ReelOverlay({ user, caption, musicName }) {
    return (
        <View style={styles.container} pointerEvents="box-none">
            
            <PostActions layout="vertical" />

            <View style={styles.bottomInfo}>
                <View style={styles.userRow}>
                    <Avatar source={user.image} size="small" />
                    <MyText type="bold" style={styles.username}>{user.username}</MyText>
                    <TouchableOpacity style={styles.followButton}>
                        <MyText type="bold" style={styles.followText}>Follow</MyText>
                    </TouchableOpacity>
                </View>

                <MyText numberOfLines={2} style={styles.caption}>
                    {caption}
                </MyText>

                <View style={styles.musicRow}>
                    <Ionicons name="musical-notes" size={14} color="white" />
                    <MyText style={styles.musicText}>{musicName}</MyText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end', 
    },
    bottomInfo: {
        paddingHorizontal: 15,
        paddingBottom: 25,
        width: '80%', 
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    username: {
        color: 'white',
        marginLeft: 10,
    },
    followButton: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginLeft: 10,
    },
    followText: {
        color: 'white',
        fontSize: 12,
    },
    caption: {
        color: 'white',
        marginBottom: 10,
    },
    musicRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    musicText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 13,
    },
});