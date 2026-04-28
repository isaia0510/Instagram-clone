import React, {useState} from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import PaginationDots from '../atoms/PaginationDots';
import {COLORS} from '../../theme/color';

const { width: SCREEN_WIDTH} = Dimensions.get('window');

export default function PostImage({ images, aspectRatio = 1}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if(!images || images.length === 0) return null;

    const imageHeight = SCREEN_WIDTH / aspectRatio;

    const onViewableItemsChanged = React.useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = React.useRef({
        itemVisiblePercentThreshold: 50, 
    }).current;

    return(
        <View style={styles.container}>
            <FlatList
                data={images}
                horizontal
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(_, index) => index.toString()}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                renderItem={({ item }) => (
                <Image
                    source={item}
                    style={[styles.image, { width: SCREEN_WIDTH, height: imageHeight }]}
                    resizeMode="cover" 
                />
                )}
            />

            {images.length > 1 && (
                <View style={styles.paginationWrapper}>
                <PaginationDots 
                    total={images.length} 
                    currentIndex={currentIndex} 
                />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
        backgroundColor: COLORS.search_color
    },
    image: {

    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});