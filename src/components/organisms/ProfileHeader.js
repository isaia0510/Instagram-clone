import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../atoms/Avatar';
import MyText from '../atoms/MyText';
import StatItem from '../molecules/StatItem';
import CustomButton from '../atoms/CustomButton';
import { COLORS } from '../../theme/color';

export default function ProfileHeader({ user, stats, onNavigate }) {
    return(
        <View style={styles.container}>
            <View style={styles.topRow}>
                <Avatar source={user.image} size="large" hasStory={user.hasStory} showPlusIcon={user.showPlusIcon} />

                <View style={styles.rightColumn}>
                    <MyText type="bold" style={styles.usernameText}>
                        {user.name}
                    </MyText>

                    <View style={styles.statsContainer}>
                        <StatItem label="post" value={stats.posts} />  
                        <StatItem label="followers" value={stats.followers} />
                        <StatItem label="following" value={stats.following} />
                    </View>
                </View>
            </View>

            <View style={styles.bioContainer}>
                <MyText style={styles.bioText}>{user.bio}</MyText>
            </View>

            <View style={styles.actionRow}>
                <CustomButton 
                    title="Edit profile" 
                    type="primary" 
                    style={styles.flexButton} 
                    onPress={() => onNavigate('EditProfile')}
                />
                <CustomButton 
                    title="Share profile" 
                    type="primary" 
                    style={styles.flexButton} 
                    onPress={() => console.log('Share')}
                />
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="person-add-outline" size={20} color={COLORS.text_primary} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: COLORS.primary_color,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightColumn: {
        flex: 1,
        marginLeft: 8, 
        justifyContent: 'center',
    },
    usernameText: {
        fontSize: 18, 
        marginBottom: 10,
        marginLeft: 36, 
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bioContainer: {
        marginTop: 17,
    },
    bioText: {
        fontSize: 14,
        lineHeight: 18,
    },
    actionRow: {
        flexDirection: 'row',
        marginTop: 15,
        gap: 8,
    },
    flexButton: {
        flex: 1,
        height: 35,
    },
    iconButton: {
        backgroundColor: COLORS.buttom_edit_profil,
        borderRadius: 8,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    }
});