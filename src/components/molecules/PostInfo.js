import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MyText from '../atoms/MyText';
import { COLORS} from '../../theme/color';

export default function PostInfo({likes, username, caption, date}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <MyText type="bold" style={styles.likesText}>
                    {likes.toLocaleString()} likes
                </MyText>
            </TouchableOpacity>

            <View style={styles.captionContainer}>
                <MyText style={styles.captionText}>
                <MyText type="bold">{username} </MyText>
                    {caption}
                </MyText>
            </View>

            <MyText style={styles.dateText}>
                {date.toUpperCase()}
            </MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingBottom: 10,
    },
    likesText: {
        fontSize: 14,
        marginBottom: 5,
    },
    captionContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    captionText: {
        fontSize: 14,
        lineHeight: 18,
    },
    dateText: {
        fontSize: 10,
        color: COLORS.text_secondary, 
        marginTop: 5,
    },
});