import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from '../../theme/color';

export default function PostActions({ layout = 'horizontal', isLight = false}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const isVertical = layout === 'vertical';
    const iconColor = isLight ? 'white' : COLORS.text_primary;

    return(
        <View style={[
            styles.container,
            isVertical ? styles.verticalLayout : styles.horizontalLayout
        ]}>
            <View style={isVertical ? styles.verticalGroup : styles.horizontalGroup}>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={styles.actionButton}>
                    <Ionicons
                        name={isLiked ? "heart" : "heart-outline"}
                        size={isVertical ? 28 : 24}
                        color={isLiked ? "#FF3B30" : iconColor}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons 
                        name="chatbubble-outline" 
                        size={isVertical ? 28 : 23} 
                        color={iconColor} 
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <Ionicons 
                        name="paper-plane-outline" 
                        size={isVertical ? 28 : 23} 
                        color={iconColor} 
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                onPress={() => setIsSaved(!isSaved)} 
                style={isVertical ? styles.actionButton : null}
            >
                <Ionicons 
                    name={isSaved ? "bookmark" : "bookmark-outline"} 
                    size={isVertical ? 28 : 24} 
                    color={iconColor} 
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    verticalLayout: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        bottom: 50,
    },
    horizontalLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizontalGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    verticalGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginBottom: 20,
    },
    actionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    }
});