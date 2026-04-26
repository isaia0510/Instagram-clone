import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Avatar from './src/components/atoms/Avatar';
import MyText from './src/components/atoms/MyText';
import BottomTabBar from './src/components/organisms/BottomMenu';
import StoriesSection from './src/components/organisms/StoriesSection';
import PostHeader from './src/components/molecules/PostHeader';
import PostImage from './src/components/molecules/PostImage';
import PostInfo from './src/components/molecules/PostInfo';
import PostPhoto1 from './assets/user1.jpg'; 
import PostPhoto2 from './assets/user2.jpg';
import Separator from './src/components/atoms/Separator';
import PostActions from './src/components/molecules/PostActions';
import NoteBubble from './src/components/molecules/NoteBubble';
import HighlightItem from './src/components/molecules/HighlightItem';
import MessageItem from './src/components/molecules/MessageItem';
import EditRow from './src/components/molecules/EditRow';
import StatItem from './src/components/molecules/StatItem';


import UserPhoto from './assets/user.jpg';

// Simulation de données
const DATA_STORIES = [
  { id: '1', username: 'Your Story', image: UserPhoto, hasStory: false, showPlusIcon: true },
  { id: '2', username: 'cristiano', hasStory: true },
  { id: '3', username: 'leomessi', image: UserPhoto, hasStory: true },
  { id: '4', username: 'neymarjr', hasStory: true },
  { id: '5', username: 'k.mbappe', image: UserPhoto, hasStory: false },
];

const MOCK_USER = {
  username: 'cristiano',
  image: UserPhoto,
  isVerified: true,
  location: 'Manchester, United Kingdom'
};

const MOCK_NOTE = {
  user: {
    username: 'ton_ami',
    image: UserPhoto,
  },
  note: "I miss my boy"
};

export default function App() {
  const mockCarousel = [PostPhoto1, PostPhoto2];

  return (
    <View style={styles.container}>
      <StoriesSection stories={DATA_STORIES} />

      <PostHeader user={MOCK_USER} />
      <ScrollView>
        <PostImage images={mockCarousel} />
        <PostActions layout="horizontal" />
        <PostInfo 
          likes={12450}
          username="cristiano"
          caption="Great victory today! Always happy to score and help the team. #football #focus"
          date="2 hours ago"
        />
      </ScrollView>

      <View style={{ flexDirection: 'row', padding: 20 }}>
        <NoteBubble 
          user={MOCK_NOTE.user} 
          note={MOCK_NOTE.note} 
        />
        
        <NoteBubble 
          user={{ username: 'marie', image: UserPhoto }} 
          note="En vacances..." 
        />
      </View>

      <View>
        <HighlightItem title="Vacances" image={UserPhoto} />
      </View>

      <ScrollView>
        <EditRow 
          label="Name" 
          defaultValue="Cristiano Ronaldo" 
          onChangeText={(val) => handleTextChange('Name', val)}
        />
        <EditRow 
          label="Username" 
          defaultValue="cristiano" 
          onChangeText={(val) => handleTextChange('Username', val)}
        />
        <EditRow 
          label="Website" 
          placeholder="Add website" 
          onChangeText={(val) => handleTextChange('Website', val)}
        />
        <EditRow 
          label="Bio" 
          placeholder="Write something about you..." 
          onChangeText={(val) => handleTextChange('Bio', val)}
        />
      </ScrollView>
      

      <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
        <StatItem value="124" label="Posts" />
        <StatItem value="5.8M" label="Followers" />
        <StatItem value="240" label="Following" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});