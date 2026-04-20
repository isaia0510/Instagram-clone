import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../theme/color';
import IconMenu from '../atoms/IconMenu';

export default function BottomTabBar({ activeRoute, userImage }) {
  return (
    <View style={styles.container}>
      <IconMenu 
        name="home" 
        isActive={activeRoute === 'home'} 
        onPress={() => console.log('Home')} 
      />
      <IconMenu 
        name="reels" 
        isActive={activeRoute === 'reels'} 
        onPress={() => console.log('Reels')} 
      />
      <IconMenu 
        name="send" 
        isActive={activeRoute === 'send'} 
        onPress={() => console.log('Send')} 
      />
      <IconMenu 
        name="search" 
        isActive={activeRoute === 'search'} 
        onPress={() => console.log('Search')} 
      />
      <IconMenu 
        name="profile" 
        isActive={activeRoute === 'profile'} 
        userImage={userImage}
        onPress={() => console.log('Profile')} 
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
    borderTopColor: COLORS.separator,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 25, 
  },
});