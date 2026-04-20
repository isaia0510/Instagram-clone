import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/color';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Avatar(
    { size = 'medium', hasStory = false, showPlusIcon = false, source}
){
    const sizes = {
        small: 30,
        medium: 56,
        large: 80
    }

    const currentSize = sizes[size] || sizes.medium;
    const strokeWidth = currentSize * 0.08; // epaisseur proportionnelle à la taille de l'avatar

    const getImageSource = () => {
        if(!source) {
            return require('../../../assets/default_user.png');
        }
        if (typeof source === 'string') {
            return { uri: source };
        }
        return source;
    };

    const renderImage = () => (
        <Image
            source={getImageSource()}
            style={[
                styles.image,
                {
                    width: currentSize,
                    height: currentSize,
                    borderRadius: currentSize / 2,
                    borderWidth: hasStory ? 2 : 0,
                    borderColor: COLORS.primary_color
                }
            ]}
        />
    );

    return (
        <View style={styles.container}>
            {hasStory ? (
                <LinearGradient
                    colors={COLORS.storyGradient}
                    style={[
                        styles.gradient,
                        {
                            width: currentSize + strokeWidth,
                            height: currentSize + strokeWidth,
                            borderRadius: (currentSize + strokeWidth) / 2,
                        }
                    ]}
                >
                    {renderImage()}
                </LinearGradient>
            ): (
                renderImage()
            )}

            {showPlusIcon && (
                <View style={styles.plusContainer}>
                    <Ionicons name="add-circle" size={currentSize * 0.35} color={COLORS.text_primary} />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
    
    },
    plusContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.primary_color,
        borderRadius: 50,
    }
});