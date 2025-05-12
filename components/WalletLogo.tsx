import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface WalletLogoProps {
    size?: 'small' | 'medium' | 'large';
}

// Google-inspired blue and green colors
const GOOGLE_BLUE = "#4285F4";
const GOOGLE_GREEN = "#34A853";
const GOOGLE_BLUE_DARK = "#3367D6";
const GOOGLE_GREEN_DARK = "#2A8743";
const WHITE = "#FFFFFF";

export default function WalletLogo({ size = 'medium' }: WalletLogoProps) {
    // Set dimensions based on size
    const dimensions = {
        small: { outer: 64, inner: 36, icon: 20 },
        medium: { outer: 80, inner: 44, icon: 24 },
        large: { outer: 96, inner: 52, icon: 30 },
    }[size];

    return (
        <View style={[styles.logoWrapper, { width: dimensions.outer, height: dimensions.outer }]}>
            {/* White background */}
            <View style={styles.background} />

            {/* Google-style quadrants with just blue and green */}
            <View style={styles.quadrantsContainer}>
                {/* Top left - Blue */}
                <View style={[styles.quadrant, {
                    top: 0,
                    left: 0,
                    backgroundColor: GOOGLE_BLUE
                }]} />

                {/* Top right - Blue Dark */}
                <View style={[styles.quadrant, {
                    top: 0,
                    right: 0,
                    backgroundColor: GOOGLE_BLUE_DARK
                }]} />

                {/* Bottom left - Green */}
                <View style={[styles.quadrant, {
                    bottom: 0,
                    left: 0,
                    backgroundColor: GOOGLE_GREEN
                }]} />

                {/* Bottom right - Green Dark */}
                <View style={[styles.quadrant, {
                    bottom: 0,
                    right: 0,
                    backgroundColor: GOOGLE_GREEN_DARK
                }]} />
            </View>

            {/* Centered icon */}
            <View style={[styles.centerIcon, {
                width: dimensions.inner,
                height: dimensions.inner,
                borderRadius: dimensions.inner / 2
            }]}>
                <MaterialIcons name="account-balance-wallet" size={dimensions.icon} color={GOOGLE_BLUE} />
            </View>

            {/* Professional shine effect */}
            <View style={styles.shineEffect} />
        </View>
    );
}

const styles = StyleSheet.create({
    logoWrapper: {
        borderRadius: 20,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 6,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: WHITE,
        borderRadius: 20,
    },
    quadrantsContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    quadrant: {
        position: 'absolute',
        width: '50%',
        height: '50%',
    },
    centerIcon: {
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F5F5F5',
    },
    shineEffect: {
        position: 'absolute',
        top: -10,
        left: 0,
        right: 0,
        height: 15,
        backgroundColor: 'rgba(255,255,255,0.2)',
        transform: [{ rotate: '-10deg' }, { scaleX: 1.5 }],
        zIndex: 3,
    },
});