import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import ReelOverlay from './src/components/organisms/ReelOverlay';
import UserPhoto from './assets/user.jpg';
import PostPhoto1 from './assets/user1.jpg';
import PostPhoto2 from './assets/user2.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f1f1',
    paddingTop: 40,
  },
});