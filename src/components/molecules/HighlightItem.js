import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Avatar from '../atoms/Avatar';
import MyText from '../atoms/MyText';
import { COLORS } from '../../theme/color';

export default function HighlightItem({ title = "Highlight", image}) {
    return(
       <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.circle}>
                <Avatar source={image} size="medium"/>
            </View>
            <MyText style={styles.title}>{title}</MyText>

       </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    circle : {
        padding: 3,
        borderWidth: 2,
        borderColor: COLORS.highlight_color,
        borderRadius: 50,
    },
    title: {
        marginTop: 5,
        fontSize: 12
    }
});