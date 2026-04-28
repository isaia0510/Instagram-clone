import React from 'react';
import { View, StyleSheet } from 'react-native';
import PostHeader from '../molecules/PostHeader';
import PostImage from '../molecules/PostImage';
import PostInfo from '../molecules/PostInfo';
import PostActions from '../molecules/PostActions';
import {COLORS} from '../../theme/color';

export default function PostCard({ post }) {
    return(
        <View style={styles.container}>
            <PostHeader user={post.user}/>

            <PostImage
                images={post.images}
                aspectRatio={post.aspectRatio || 1}
            />

            <PostActions layout="horizontal"/>

            <PostInfo
                likes={post.likes}
                username={post.user.username}
                caption={post.caption}
                date={post.date}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary_color,
        width: '100%',
        marginBottom: 20,
    }
});