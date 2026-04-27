import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../atoms/Avatar';
import MyText from '../atoms/MyText';
import NotificationBadge from '../atoms/NotificationBadge';
import { COLORS } from '../../theme/color';

export default function MessageItem({ user, lastMessage, isUnread}) {
    return(
        <TouchableOpacity style={styles.container}>
            <Avatar source={user.image} size="medium"/>

            <View style={styles.content}>
                <MyText type={isUnread ? "bold" : "regular"} style={styles.username}>
                    {user.username}
                </MyText>
                <View style={styles.messageRow}>
                    <MyText
                        numberOfLines={1}
                        style={[styles.lastMessage, { color: isUnread ? COLORS.text_primary : COLORS.text_secondary}]}
                    >
                        {lastMessage}
                    </MyText>
                </View>
            </View>

            <View style={styles.rightSection}>
                {isUnread && (
                    <NotificationBadge
                        isAbsolute={false}
                        size={8}
                        isNotification={false}
                    />
                )}

                <TouchableOpacity style={styles.cameraIcon}>
                    <Ionicons
                        name="camera-outline"
                        size={24}
                        color={COLORS.text_primary}
                    />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    content: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    username: {
        fontSize: 14
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lastMessage: { fontSize: 13, marginRight: 5, maxWidth: '85%' },
    cameraIcon: { paddingLeft: 10 },
});