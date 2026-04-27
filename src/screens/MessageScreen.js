import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/color';
import { MOCK_DATA } from '../../data/mock_data';

import MessageHeader from '../components/organisms/MessageHeader';
import SearchBar from '../components/atoms/SearchBar';
import MessageList from '../components/organisms/MessageList';
import BottomTabBar from '../components/organisms/BottomMenu';

export default function MessageScreen({ onNavigate }) {
    const currentUser = MOCK_DATA.users.user_1;

    const otherNotes = MOCK_DATA.notes.map(note => ({
        ...note,
        user: MOCK_DATA.users[note.userId]
    })).filter(n => n.userId !== currentUser.id);

    const myNote = {
        id: 'my-note',
        userId: currentUser.id,
        user: currentUser,
        text: "Share a thought...",
        isPlaceholder: true 
    };

    const finalNotes = [myNote, ...otherNotes];

    const messagesData = [
        { 
            id: 'm1', 
            user: MOCK_DATA.users.user_2, 
            lastMessage: 'Just finished watching...', 
            isUnread: true 
        },
        { 
            id: 'm2', 
            user: MOCK_DATA.users.user_3, 
            lastMessage: 'Feeling inspired today', 
            isUnread: false 
        }
    ];

    return(
        <View style={styles.container}>
            <MessageHeader username={currentUser.username} />

            <SearchBar placeholder="Search messages"/>

            <MessageList notes={finalNotes} messages={messagesData} />

            <BottomTabBar
                activeRoute="send" 
                onNavigate={onNavigate} 
                userImage={currentUser.image}
            />
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