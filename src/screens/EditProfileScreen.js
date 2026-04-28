import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from '../theme/color';
import { MOCK_DATA } from '../../data/mock_data';

import EditProfileHeader from '../components/organisms/EditProfileHeader';
import EditRow from '../components/molecules/EditRow';
import MyText from '../components/atoms/MyText';
import Separator from '../components/atoms/Separator';

export default function EditProfileScreen({ onNavigate }) {
    const user = MOCK_DATA.users.user_1;

    return(
        <View style={styles.container}>
            <EditProfileHeader onBack={() => onNavigate('Profile')}/>
            <ScrollView>
                <View style={styles.avatarSection}>
                    <View style={styles.avatarContainer}>
                        <Image source={user.image} style={styles.avatar} />
                        <View style={styles.avatarPlaceholder}>
                            <Ionicons name="happy-outline" size={35} color="#444" />
                        </View>
                    </View>
                    <TouchableOpacity>
                        <MyText style={styles.editPictureText}>Edit picture or avatar</MyText>
                    </TouchableOpacity>
                </View>

                <EditRow label="Name" defaultValue={user.name} />
                <EditRow label="Username" defaultValue={user.username} />
                <EditRow label="Bio" defaultValue={user.bio} />
                <EditRow label="Gender" defaultValue="Female" />

                <View style={styles.footerLinks}>
                    <TouchableOpacity><MyText style={styles.blueLink}>Switch to professional account</MyText></TouchableOpacity>
                    <Separator />
                    <TouchableOpacity><MyText style={styles.blueLink}>Personal information settings</MyText></TouchableOpacity>
                    <Separator />
                    <TouchableOpacity><MyText style={styles.blueLink}>Show your profile is verified</MyText></TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary_color,
        paddingTop: 45,
    },
    avatarSection: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#eee',
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editPictureText: {
        color: COLORS.option_profil, 
        fontWeight: '600',
    },
    footerLinks: {
        marginTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#dbdbdb',
    },
    blueLink: {
        color: COLORS.option_profil,
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    separator: {
        height: 0.5,
        backgroundColor: '#dbdbdb',
    }
});