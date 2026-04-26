import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../atoms/Avatar';
import MyText from '../atoms/MyText';
import Badge from '../atoms/Badge';
import {COLORS} from '../../theme/color';

export default function PostHeader({ user}) {
    return(
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Avatar source={user.image} size="small" hasStory={user.hasStory} />

                <View style={styles.textContainer}>
                    <View style={styles.nameRow}>
                        <MyText type="bold" style={styles.username}>
                            {user.username}
                        </MyText>

                        {user.isVerified && <Badge size={14} />}
                    </View>
                    {user.location && (
                        <MyText style={styles.location}>{user.location}</MyText>
                    )}
                </View>
            </View>

            <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.text_primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 10,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        fontSize: 14,
    },
    location: {
        fontSize: 12,
        color: COLORS.text_secondary,
    }
});