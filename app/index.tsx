import WalletLogo from '@/components/WalletLogo';
import Wrapper from '@/components/Wrapper';
import { color } from '@/utils/color';
import { App_bio, App_name } from '@/utils/const';
import { supabase } from '@/utils/supabase';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function Index() {
    const [pulseAnim] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Set up repeating pulse animation for the logo and loading indicator
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ])
        ).start();

        // // Navigate after delay
        // const timer = setTimeout(() => {
        //     // router.replace('/(auth)/onboarding1')
        //     router.replace('/(auth)/loginpage')
        // }, 2000);

        // return () => { clearTimeout(timer) }
        checkAuthStatus()
    }, []);

    const checkAuthStatus = async () => {
        setLoading(true)
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                router.replace("/(home)")
            } else {
                router.replace("/(auth)/onboarding1")
            }
        } catch (err) {
            console.log("Auth Status failed ")
            router.replace("/(auth)/loginpage")
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={color.white} />

            <SafeAreaView style={styles.safeArea}>
                <Wrapper style={styles.wrapper}>
                    <View style={styles.contentContainer}>
                        {/* Logo with subtle animation */}
                        <Animated.View
                            style={[
                                styles.logoContainer,
                                {
                                    transform: [{
                                        translateY: pulseAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, -3]
                                        })
                                    }]
                                }
                            ]}
                        >
                            <WalletLogo size="large" />

                            {/* Subtle shadow beneath the logo */}
                            <Animated.View style={[
                                styles.logoShadow,
                                {
                                    opacity: pulseAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.15, 0.05]
                                    }),
                                    transform: [{
                                        scale: pulseAnim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.9, 1.05]
                                        })
                                    }]
                                }
                            ]} />
                        </Animated.View>

                        {/* App Name with premium typographic styling */}
                        <Text style={styles.appName}>
                            {App_name}
                        </Text>

                        {/* Blue-Green gradient line */}
                        <View style={styles.gradientLineContainer}>
                            <LinearGradient
                                colors={[color.primary_blue, color.primary_green]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientLine}
                            />
                        </View>

                        {/* App Bio */}
                        <Text style={styles.appBio}>
                            {App_bio}
                        </Text>

                        {/* Loading indicator with blue color */}
                        {loading && (
                            <View style={styles.loadingContainer}>
                                <Animated.View style={[
                                    styles.loadingDot,
                                    {
                                        backgroundColor: color.primary_blue,
                                        opacity: pulseAnim.interpolate({
                                            inputRange: [0, 0.5, 1],
                                            outputRange: [0.3, 1, 0.3]
                                        }),
                                        transform: [{
                                            scale: pulseAnim.interpolate({
                                                inputRange: [0, 0.5, 1],
                                                outputRange: [0.8, 1, 0.8]
                                            })
                                        }]
                                    }
                                ]} />
                            </View>
                        )}
                    </View>
                </Wrapper>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    },
    safeArea: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
    },
    logoContainer: {
        marginBottom: 24,
        position: 'relative',
    },
    logoShadow: {
        position: 'absolute',
        width: 75,
        height: 12,
        borderRadius: 50,
        backgroundColor: color.black,
        bottom: -12,
        zIndex: -1,
        alignSelf: 'center',
    },
    appName: {
        fontSize: 32,
        fontWeight: '600',
        color: color.black,
        letterSpacing: 0.5,
        marginBottom: 8,
    },
    gradientLineContainer: {
        width: 40,
        height: 3,
        marginBottom: 16,
        overflow: 'hidden',
        borderRadius: 3,
    },
    gradientLine: {
        height: '100%',
        width: '100%',
    },
    appBio: {
        fontSize: 16,
        color: color.grey,
        textAlign: 'center',
        maxWidth: width * 0.7,
        marginBottom: 36,
        lineHeight: 22,
    },
    loadingContainer: {
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});