import Wrapper from '@/components/Wrapper';
import { color } from '@/utils/color';
import { App_bio, App_name } from '@/utils/const';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function Index() {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        // Start the fade-in animation
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        // Navigate after delay
        const timer = setTimeout(() => {
            router.replace('/(auth)/onboarding1')
        }, 2000); // Show splash for 2 seconds

        return () => { clearTimeout(timer) }
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: color.white }}>
            <StatusBar barStyle="dark-content" backgroundColor={color.white} />

            <SafeAreaView style={{ flex: 1 }}>
                <Wrapper style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                    <Animated.View style={{
                        opacity: fadeAnim,
                        transform: [{
                            scale: fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.9, 1]
                            })
                        }],
                        alignItems: 'center'
                    }}>
                        {/* Google-style icon */}
                        <View style={{
                            width: 96,
                            height: 96,
                            borderRadius: 24,
                            backgroundColor: color.white,
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                            marginBottom: 24,
                            elevation: 2,
                            shadowColor: color.black,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                        }}>
                            {/* Top left - Blue */}
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 48,
                                height: 48,
                                backgroundColor: color.primary_blue
                            }} />

                            {/* Top right - Red */}
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: 48,
                                height: 48,
                                backgroundColor: color.primary_red
                            }} />

                            {/* Bottom left - Green */}
                            <View style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: 48,
                                height: 48,
                                backgroundColor: color.primary_green
                            }} />

                            {/* Bottom right - Yellow */}
                            <View style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: 48,
                                height: 48,
                                backgroundColor: color.primary_yellow
                            }} />

                            {/* Centered wallet icon */}
                            <View style={{
                                backgroundColor: color.white,
                                width: 52,
                                height: 52,
                                borderRadius: 26,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1,
                                elevation: 1,
                                shadowColor: color.black,
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.1,
                                shadowRadius: 2,
                            }}>
                                <MaterialIcons name="account-balance-wallet" size={30} color={color.primary_blue} />
                            </View>
                        </View>

                        {/* App Name */}
                        <Text style={{
                            fontSize: 28,
                            fontWeight: '500',
                            marginBottom: 8,
                            color: color.black,
                            letterSpacing: 0.25
                        }}>
                            {App_name}
                        </Text>

                        {/* App Bio */}
                        <Text style={{
                            fontSize: 16,
                            color: color.grey,
                            textAlign: 'center',
                            maxWidth: width * 0.75,
                            marginBottom: 36,
                            lineHeight: 22
                        }}>
                            {App_bio}
                        </Text>

                        {/* Loading Indicator */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 16
                        }}>
                            {/* Animated dots */}
                            <Animated.View style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: color.primary_blue,
                                marginHorizontal: 4,
                                opacity: fadeAnim.interpolate({
                                    inputRange: [0, 0.2, 0.5, 0.8, 1],
                                    outputRange: [0.2, 1, 0.2, 0.2, 0.2]
                                }),
                                transform: [{
                                    scale: fadeAnim.interpolate({
                                        inputRange: [0, 0.2, 0.5, 0.8, 1],
                                        outputRange: [0.8, 1.2, 0.8, 0.8, 0.8]
                                    })
                                }]
                            }} />
                            <Animated.View style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: color.primary_red,
                                marginHorizontal: 4,
                                opacity: fadeAnim.interpolate({
                                    inputRange: [0, 0.2, 0.5, 0.8, 1],
                                    outputRange: [0.2, 0.2, 1, 0.2, 0.2]
                                }),
                                transform: [{
                                    scale: fadeAnim.interpolate({
                                        inputRange: [0, 0.2, 0.5, 0.8, 1],
                                        outputRange: [0.8, 0.8, 1.2, 0.8, 0.8]
                                    })
                                }]
                            }} />
                            <Animated.View style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: color.primary_yellow,
                                marginHorizontal: 4,
                                opacity: fadeAnim.interpolate({
                                    inputRange: [0, 0.2, 0.5, 0.8, 1],
                                    outputRange: [0.2, 0.2, 0.2, 1, 0.2]
                                }),
                                transform: [{
                                    scale: fadeAnim.interpolate({
                                        inputRange: [0, 0.2, 0.5, 0.8, 1],
                                        outputRange: [0.8, 0.8, 0.8, 1.2, 0.8]
                                    })
                                }]
                            }} />
                            <Animated.View style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: color.primary_green,
                                marginHorizontal: 4,
                                opacity: fadeAnim.interpolate({
                                    inputRange: [0, 0.2, 0.5, 0.8, 1],
                                    outputRange: [0.2, 0.2, 0.2, 0.2, 1]
                                }),
                                transform: [{
                                    scale: fadeAnim.interpolate({
                                        inputRange: [0, 0.2, 0.5, 0.8, 1],
                                        outputRange: [0.8, 0.8, 0.8, 0.8, 1.2]
                                    })
                                }]
                            }} />
                        </View>
                    </Animated.View>
                </Wrapper>
            </SafeAreaView>
        </View>
    )
}