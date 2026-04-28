import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import NoteBubble from '../molecules/NoteBubble';
import MessageItem from '../molecules/MessageItem';
import MyText from '../atoms/MyText';
import { COLORS } from '../../theme/color';

export default function MessageList({ notes, messages }) {
    const renderHeader = () => {
        return(

            <View style={styles.headerSection}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.notesScroll}
                >
                    {notes.map((note) => (
                        <NoteBubble 
                            key={note.id} 
                            user={note.user} 
                            note={note.text} 
                        />
                    ))}
                </ScrollView>

                <View style={styles.titleBar}>
                    <MyText type="bold" style={styles.titleText}>Messages</MyText>
                    <TouchableOpacity>
                    <MyText type="bold" style={styles.requestText}>Requests</MyText>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return(
        <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={renderHeader}
            renderItem={({ item }) => (
                <MessageItem 
                    user={item.user} 
                    lastMessage={item.lastMessage} 
                    isUnread={item.isUnread} 
                />
            )}
            showsVerticalScrollIndicator={false}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary_color,
  },
  headerSection: {
    paddingTop: 10,
  },
  notesScroll: {
    paddingLeft: 10,
    paddingBottom: 20,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 16,
    color: COLORS.text_primary,
  },
  requestText: {
    fontSize: 14,
    color: COLORS.text_secondary, 
  },
});