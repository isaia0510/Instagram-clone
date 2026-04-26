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
                renderItem={({ item }) => (
                    <StoryCircle user={item} />
                )}
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