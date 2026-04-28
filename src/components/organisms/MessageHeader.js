import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MyText from '../atoms/MyText';
import { COLORS } from '../../theme/color';

export default function MessageHeader({ username, onBack}) {
    return(
        <View style={styles.container}>
            <View style={styles.leftSection}>
                
                <TouchableOpacity style={styles.userSelector}>
                    <MyText type="bold" style={styles.username}>{username}</MyText>
                    <Ionicons name="chevron-down" size={16} color={COLORS.text_primary} />
                </TouchableOpacity>

            </View>

            <TouchableOpacity>
                <Ionicons name="create-outline" size={28} color={COLORS.text_primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  userSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  username: {
    fontSize: 25,
  }
});