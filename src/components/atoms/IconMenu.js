import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {COLORS} from '../../theme/color';
import Avatar from './Avatar';

export default function IconMenu(
    {name, onPress, isActive=false, userImage}
) {

    const renderIcon = () => {
        switch(name) {
            case 'home':
                return <Ionicons name={isActive ? "home" : "home-outline"} size={26} color={COLORS.text_primary} />;
            case 'reels':
                return <MaterialCommunityIcons name={isActive ? "movie-play" : "movie-play-outline"} size={26} color={COLORS.text_primary} />;
            case 'send':
                return <Ionicons name={isActive ? "paper-plane" : "paper-plane-outline"} size={26} color={COLORS.text_primary} />;
            case 'search':
                return <Ionicons name={isActive ? "search" : "search-outline"} size={26} color={COLORS.text_primary} />;
            case 'profile':
                return(
                    <Avatar
                        size="small"
                        source={userImage}
                        hasStory={false}
                        style={isActive ? styles.activeAvatar : null}
                    />
                );
            default:
                return null;
        }
    };

    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
            {renderIcon()}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,               
        height: '100%',         
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,       
    },

    activeAvatar: {
        borderWidth: 1,
        borderColor: COLORS.text_primary,
    }
});