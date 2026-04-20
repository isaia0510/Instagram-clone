import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/color';


export default function SearchBar({
    placeholder = "Search",
    onChangeText
}) {
    const [isActive, setIsActive] = useState(false);

    return(
        <View style={styles.container}>
            <View style={[
                styles.searchContainer,
                { borderColor: isActive ? COLORS.text_primary : 'transparent', borderWidth: 1}
            ]}>
                <Ionicons
                    name="search"
                    size={18}
                    color={COLORS.text_primary}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.text_secondary}
                    onChangeText={onChangeText}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.search_color,
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40
    },
    searchIcon: {
        marginRight: 10
    },
    input: {
        flex: 1,
        color: COLORS.text_primary,
        fontSize: 16
    }
});