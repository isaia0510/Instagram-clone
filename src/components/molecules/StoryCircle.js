import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../atoms/Avatar';
import MyText from '../atoms/MyText';

export default function StoryCircle({ user, onPress }) {
    const displayName = user.username.length > 10 
    ? user.username.substring(0, 9) + '...' 
    : user.username;

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Avatar
                source={user.image}
                size="large"
                hasStory={user.hasStory}
                showPlusIcon={user.showPlusIcon}
            />

            <MyText style={styles.username}>
                {displayName}
            </MyText>

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 12,
        width: 75,
    },
    username: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center',
    }
});