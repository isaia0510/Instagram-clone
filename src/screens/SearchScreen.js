import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/color';
import BottomTabBar from '../components/organisms/BottomMenu';
import SearchBar from '../components/atoms/SearchBar';
import { MOCK_DATA } from '../../data/mock_data';

const {width} = Dimensions.get('window');
const SQUARE_SIZE = width / 3;

export default function SearchScreen({ onNavigate }) {
    const placeholder = Array.from({ length: 21}, (_, i) => ({ id: i.toString() }));

    const renderItem = () => (
        <TouchableOpacity style={styles.gridSquare}>
           <View style={styles.placeholderBlock} /> 
        </TouchableOpacity>
    );

    return(
        <View style={styles.container}>
           <View style={styles.header}>
                <SearchBar placeholder="Search"/>
           </View> 

           <FlatList
                data={placeholder}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.gridContent}
           />

           <BottomTabBar
                activeRoute="search"
                onNavigate={onNavigate}
                userImage={MOCK_DATA.users.user_1.image}
           />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary_color,
        paddingTop: 45,
    },
    header: {
        marginBottom: 5,
    },
    gridContent: {
        paddingBottom: 80, 
    },
    gridSquare: {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        padding: 1,
    },
    placeholderBlock: {
        flex: 1,
        backgroundColor: '#EBEBEB', 
    },
});