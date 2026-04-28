import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import StoryCircle from '../molecules/StoryCircle';

export default function StoriesSection({ stories}) {
    return(
        <View style={styles.container}>
            <FlatList
                data={stories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isCurrentUser = item.id === "user_1";
                    
                    return (
                        <StoryCircle 
                            user={{
                                ...item,
                                username: isCurrentUser ? "Your story" : item.username
                            }} 
                            showPlusIcon={isCurrentUser}
                        />
                    );
                }}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    listContent: {
        paddingHorizontal: 10,
    }
});