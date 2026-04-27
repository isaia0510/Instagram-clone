import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { COLORS } from './src/theme/color';
import HomeScreen from './src/screens/HomeScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import MessageScreen from './src/screens/MessageScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch(currentScreen) {
      case 'Home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'Messages':
        return <MessageScreen onNavigate={setCurrentScreen} />;
      case 'Profile':
        return <ProfilScreen onNavigate={setCurrentScreen} />;
      case 'EditProfile':
        return <EditProfileScreen onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  }
  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary_color,
  },
});