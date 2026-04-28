import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TabIcon from '../atoms/TabIcon';
import { COLORS } from '../../theme/color';

export default function TabSelector({ onTabChange }) {
    const [activeTab, setActiveTab] = useState('posts');
    const handlePress = (tabName) => {
        setActiveTab(tabName);
        if (onTabChange) onTabChange(tabName);
    };

    return(
        <View style={styles.container}>
            <TabIcon 
                name={activeTab === 'posts' ? "grid" : "grid-outline"} 
                isActive={activeTab === 'posts'} 
                onPress={() => handlePress('posts')} 
            />
            <TabIcon 
                name={activeTab === 'reels' ? "play-circle" : "play-circle-outline"} 
                isActive={activeTab === 'reels'} 
                onPress={() => handlePress('reels')} 
            />
            <TabIcon 
                name={activeTab === 'mentions' ? "person-circle" : "person-circle-outline"} 
                isActive={activeTab === 'mentions'} 
                onPress={() => handlePress('mentions')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    backgroundColor: COLORS.primary_color,
    borderTopColor: COLORS.highlight_color,
  },
});