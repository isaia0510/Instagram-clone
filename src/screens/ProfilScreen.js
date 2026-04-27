import React, {useState} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../theme/color';
import { MOCK_DATA } from '../../data/mock_data';

import ProfileHeader from '../components/organisms/ProfileHeader';
import HighlighScroll from '../components/organisms/HighlightScroll';
import TabSelector from '../components/organisms/TabSelector';
import PhotoGrid from '../components/organisms/PhotoGrid';
import MyText from '../components/atoms/MyText';
import BottomMenu from '../components/organisms/BottomMenu';
import ProfilTopHeader from '../components/organisms/ProfilTopHeader';

export default function ProfilScreen({ onNavigate }) {
    const [activeTab, setActiveTab] = useState('grid');
    const user = MOCK_DATA.users.user_1;
    const userHighlights = user.highlights.map(id => MOCK_DATA.highlights[id]);
    const userPosts = MOCK_DATA.posts.filter(post => post.userId === user.id);

    const renderTabContent = () => {
        if (activeTab === 'grid') {
            return userPosts.length > 0 
                ? <PhotoGrid photos={userPosts} /> 
                : <EmptyState title="Photos of you" subtitle="When you share photos, they'll appear on your profile." />;
        }
        if (activeTab === 'reels') {
            return <EmptyState title="Videos" subtitle="When you share videos, they'll appear here." />;
        }
        if (activeTab === 'mentions') {
            return <EmptyState title="Photos and videos of you" subtitle="When people tag you in photos and videos, they'll appear here." />;
        }
    };

    return(
        <View style={styles.container}>
            <ProfilTopHeader username={user.username} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProfileHeader user={user} stats={user.stats} />
                <HighlighScroll highlights={userHighlights} />
                <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
                {renderTabContent()}
            </ScrollView>

            <BottomMenu activeRoute="profile" onNavigate={onNavigate} userImage={user.image} />
        </View>
    );
}

const EmptyState = ({ title, subtitle }) => (
    <View style={styles.emptyContainer}>
        <MyText type="bold" style={styles.emptyTitle}>{title}</MyText>
        <MyText style={styles.emptySubtitle}>{subtitle}</MyText>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary_color,
        paddingTop: 45,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 40,
    },
    emptyTitle: {
        fontSize: 22,
        marginBottom: 10,
    },
    emptySubtitle: {
        textAlign: 'center',
        color: '#707070',
        fontSize: 14,
    }
});