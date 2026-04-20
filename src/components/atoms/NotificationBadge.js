import React from 'react';
import { View, StyleSheet} from 'react-native';
import { COLORS } from '../../theme/color';

export default function NotificationBadge({ 
    size = 10, 
    isNotification = false,
    isAbsolute = true 
}) {

    const badgeColor = isNotification ? COLORS.notification_red : COLORS.unread;

    return(
        <View style={[
            styles.dot,
            {
                width: size, 
                height: size, 
                borderRadius: size / 2, 
                backgroundColor: badgeColor,
                ...(isAbsolute && styles.absolutePosition),
                borderWidth: isAbsolute ? 1.5 : 0,
                borderColor: COLORS.primary_color,
            }
        ]}>

        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    absolutePosition: {
        position: 'absolute',
        top: -2,
        right: -2,
        zIndex: 1,
    }
});