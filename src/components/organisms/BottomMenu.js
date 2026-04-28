import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/color';
import IconMenu from '../atoms/IconMenu';

export default function BottomTabBar({ activeRoute, userImage, onNavigate }) {
  return (
    <View style={styles.container}>
      <IconMenu 
        name="home" 
        isActive={activeRoute === 'home'} 
        onPress={() => onNavigate('Home') } 
      />
      <IconMenu 
        name="reels" 
        isActive={activeRoute === 'reels'} 
        onPress={() => onNavigate('Reel')} 
      />
      <IconMenu 
        name="send" 
        isActive={activeRoute === 'send'} 
        onPress={() => onNavigate('Messages')} 
      />
      <IconMenu 
        name="search" 
        isActive={activeRoute === 'search'} 
        onPress={() => onNavigate('Search')} 
      />
      <IconMenu 
        name="profile" 
        isActive={activeRoute === 'profile'} 
        userImage={userImage}
        onPress={() => onNavigate('Profile')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70, 
    backgroundColor: COLORS.primary_color,
    borderTopWidth: 0.5,
    borderTopColor: '#dedddd',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 25, 
  },
});