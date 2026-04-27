import React, {useEffect, useState, useRef, useCallback} from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { MOCK_DATA } from '../../data/mock_data';
import ReelOverlay from '../components/organisms/ReelOverlay';
import BottomMenu from '../components/organisms/BottomMenu';
import ReelHeader from '../components/organisms/ReelHeader';

const { width, height } = Dimensions.get('window');

const ReelItem = ({ item, isActive }) => {
    const user = MOCK_DATA.users[item.userId];
    
    const player = useVideoPlayer(item.video, (player) => {
        player.loop = true;
    });

    useEffect(() => {
        if (isActive) {
            player.currentTime = 0;
            player.play();
        } else {
            player.pause();
        }
    }, [isActive, player]);

    return (
        <View style={styles.reelContainer}>
            <VideoView
                style={styles.video}
                player={player}
                resizeMode="cover"
                allowsFullscreen={false}
                showsPlaybackControls={false} 
            />
            
            <ReelOverlay 
                user={user}
                caption={item.caption}
                musicName={item.musicName}
            />
        </View>
    );
};

export default function ReelScreen({ onNavigate }) {
    const [activeId, setActiveId] = useState(MOCK_DATA.reels[0].id);

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveId(viewableItems[0].item.id);
        }
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={MOCK_DATA.reels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ReelItem item={item} isActive={item.id === activeId} />} 
                pagingEnabled
                vertical
                showsVerticalScrollIndicator={false}
                snapToInterval={height}
                snapToAlignment="start"
                decelerationRate="fast"
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            
            <ReelHeader/>

            <BottomMenu 
                activeRoute="reels" 
                onNavigate={onNavigate} 
                userImage={MOCK_DATA.users.user_1.image} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    reelContainer: {
        width: width,
        height: height,
    },
    video: {
        ...StyleSheet.absoluteFillObject,
    }
});