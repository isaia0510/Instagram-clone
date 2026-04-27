import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { COLORS } from '../theme/color';
import {MOCK_DATA} from '../../data/mock_data';
import HomeHeader from '../components/organisms/HomeHeader';
import PostCard from '../components/organisms/PostCard';
import BottomMenu from '../components/organisms/BottomMenu';
import StoriesSection from '../components/organisms/StoriesSection';

export default function HomeScreen({ onNavigate }) {
    const currentUser = MOCK_DATA.users.user_1;

    const otherStories = Object.values(MOCK_DATA.users).filter(
        u => u.hasStory && u.id !== "user_1"
    );

    const finalStories = [currentUser, ...otherStories];

    const feedPosts = MOCK_DATA.posts.map(post => ({
        ...post,
        user: MOCK_DATA.users[post.userId]
    }));


    return(
        <View style={styles.container}>
            <HomeHeader/>

            <ScrollView showsVerticalScrollIndicator={false}>
                <StoriesSection stories={finalStories} />

                {feedPosts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ScrollView>

            <BottomMenu activeRoute="home" onNavigate={onNavigate} userImage={MOCK_DATA.users.user_1.image} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary_color,
    paddingTop: 45,
  },
});