import { color } from '@/utils/color';
import { useSignIn } from '@clerk/clerk-expo';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function Login() {
    const { signIn, isLoaded } = useSignIn();
    const [loading, setLoading] = useState(false);

    // Function to handle Google OAuth
    const onSignInWithGoogle = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            setLoading(true);

            // Start the OAuth flow with Google
            const { createdSessionId, setActive } = await signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/",
                redirectUrlComplete: "/dashboard",
            });

            if (createdSessionId) {
                // Set the session active to log in the user
                await setActive({ session: createdSessionId });
                router.replace('/(home)');
            }
        } catch (err) {
            console.error("OAuth error", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={color.white} />

            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.keyboardView}
                >
                    {/* Google-style logo */}
                    <View style={styles.logoContainer}>
                        <View style={styles.logoWrapper}>
                            {/* Top left - Blue */}
                            <View style={[styles.logoQuadrant, { top: 0, left: 0, backgroundColor: color.primary_blue }]} />
                            {/* Top right - Red */}
                            <View style={[styles.logoQuadrant, { top: 0, right: 0, backgroundColor: color.primary_red }]} />
                            {/* Bottom left - Green */}
                            <View style={[styles.logoQuadrant, { bottom: 0, left: 0, backgroundColor: color.primary_green }]} />
                            {/* Bottom right - Yellow */}
                            <View style={[styles.logoQuadrant, { bottom: 0, right: 0, backgroundColor: color.primary_yellow }]} />

                            {/* Centered icon */}
                            <View style={styles.centerIcon}>
                                <MaterialIcons name="account-balance-wallet" size={24} color={color.primary_blue} />
                            </View>
                        </View>

                        <Text style={styles.appName}>Finance Tracker</Text>
                    </View>

                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Welcome</Text>
                        <Text style={styles.subtitle}>Sign in to continue to your account</Text>
                    </View>

                    {/* Sign In with Google Button */}
                    <TouchableOpacity
                        style={styles.googleButton}
                        onPress={onSignInWithGoogle}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color={color.white} size="small" />
                        ) : (
                            <>
                                <Image
                                    source={require('@/assets/images/flag.png')}
                                    style={styles.googleLogo}
                                    resizeMode="contain"
                                />
                                <Text style={styles.googleButtonText}>Sign in with Google</Text>
                            </>
                        )}
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Skip for now button */}
                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={() => router.replace('/(home)')}
                    >
                        <Text style={styles.skipButtonText}>Skip for now</Text>
                    </TouchableOpacity>

                    {/* Terms and Conditions */}
                    <Text style={styles.termsText}>
                        By signing in, you agree to our{' '}
                        <Text style={styles.termsLink}>Terms of Service</Text>{' '}
                        and{' '}
                        <Text style={styles.termsLink}>Privacy Policy</Text>
                    </Text>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    },
    safeArea: {
        flex: 1,
    },
    keyboardView: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoWrapper: {
        width: 80,
        height: 80,
        borderRadius: 20,
        backgroundColor: color.white,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    logoQuadrant: {
        position: 'absolute',
        width: 40,
        height: 40,
    },
    centerIcon: {
        backgroundColor: color.white,
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    appName: {
        fontSize: 24,
        fontWeight: '500',
        color: color.black,
        marginTop: 16,
    },
    headerContainer: {
        marginBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: color.black,
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: color.grey,
        textAlign: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        backgroundColor: color.primary_blue,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    googleButtonText: {
        color: color.white,
        fontSize: 16,
        fontWeight: '500',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: color.divider,
    },
    dividerText: {
        color: color.grey,
        paddingHorizontal: 16,
        fontSize: 14,
    },
    skipButton: {
        backgroundColor: color.surface_variant,
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
        marginBottom: 24,
    },
    skipButtonText: {
        color: color.grey,
        fontSize: 16,
        fontWeight: '500',
    },
    termsText: {
        fontSize: 12,
        color: color.grey,
        textAlign: 'center',
        lineHeight: 18,
    },
    termsLink: {
        color: color.primary_blue,
        fontWeight: '500',
    },
});