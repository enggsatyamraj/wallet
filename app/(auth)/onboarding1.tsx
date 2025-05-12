import WalletLogo from '@/components/WalletLogo'
import { color } from '@/utils/color'
import { App_name } from '@/utils/const'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function Onboarding1() {
    const handleNext = () => {
        router.push('/(auth)/onboarding2')
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={color.white} />

            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* App Logo */}
                    <View style={styles.logoContainer}>
                        <WalletLogo size="medium" />

                        <Text style={styles.appName}>
                            {App_name}
                        </Text>

                        {/* Blue-Green gradient line for consistency with splash screen */}
                        <View style={styles.gradientLineContainer}>
                            <LinearGradient
                                colors={[color.primary_blue, color.primary_green]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientLine}
                            />
                        </View>
                    </View>

                    {/* Feature Cards */}
                    <View style={styles.featuresContainer}>
                        {/* Feature 1 */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIconContainer, { backgroundColor: color.light_blue }]}>
                                <MaterialIcons name="insights" size={24} color={color.primary_blue} />
                            </View>
                            <View style={styles.featureTextContainer}>
                                <Text style={styles.featureTitle}>
                                    Track Your Expenses
                                </Text>
                                <Text style={styles.featureDescription}>
                                    Record and categorize your daily spending
                                </Text>
                            </View>
                        </View>

                        {/* Feature 2 */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIconContainer, { backgroundColor: color.light_green }]}>
                                <MaterialIcons name="bar-chart" size={24} color={color.primary_green} />
                            </View>
                            <View style={styles.featureTextContainer}>
                                <Text style={styles.featureTitle}>
                                    Visualize Your Budget
                                </Text>
                                <Text style={styles.featureDescription}>
                                    See charts and insights about your spending
                                </Text>
                            </View>
                        </View>

                        {/* Feature 3 */}
                        <View style={styles.featureCard}>
                            <View style={[styles.featureIconContainer, { backgroundColor: color.light_blue }]}>
                                <MaterialIcons name="trending-up" size={24} color={color.primary_blue_dark} />
                            </View>
                            <View style={styles.featureTextContainer}>
                                <Text style={styles.featureTitle}>
                                    Achieve Your Goals
                                </Text>
                                <Text style={styles.featureDescription}>
                                    Set financial goals and track your progress
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Title and Description */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Smart money management
                        </Text>

                        <Text style={styles.description}>
                            Take control of your finances with our simple and efficient tools
                        </Text>
                    </View>
                </ScrollView>

                {/* Footer with button and pagination - fixed at bottom */}
                <View style={styles.footer}>
                    {/* Next Button */}
                    <LinearGradient
                        colors={[color.primary_blue, color.primary_blue_dark]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.buttonGradient}
                    >
                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={handleNext}
                        >
                            <Text style={styles.nextButtonText}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    {/* Pagination Dots */}
                    <View style={styles.paginationContainer}>
                        <View style={styles.activeDot} />
                        <View style={styles.inactiveDot} />
                    </View>
                </View>
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
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: height * 0.06,
        marginBottom: height * 0.03,
    },
    appName: {
        fontSize: 24,
        fontWeight: '500',
        color: color.black,
        marginTop: 16,
    },
    gradientLineContainer: {
        width: 32,
        height: 3,
        marginTop: 8,
        overflow: 'hidden',
        borderRadius: 3,
    },
    gradientLine: {
        height: '100%',
        width: '100%',
    },
    featuresContainer: {
        marginBottom: 24,
    },
    featureCard: {
        backgroundColor: color.surface,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    featureIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    featureTextContainer: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: color.black,
        marginBottom: 2,
    },
    featureDescription: {
        fontSize: 14,
        color: color.grey,
        lineHeight: 20,
    },
    titleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: color.black,
        textAlign: 'center',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: color.grey,
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 12,
    },
    footer: {
        paddingHorizontal: 24,
        paddingBottom: 16,
        backgroundColor: color.white,
    },
    buttonGradient: {
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    nextButton: {
        paddingVertical: 14,
        alignItems: 'center',
    },
    nextButtonText: {
        color: color.white,
        fontWeight: '500',
        fontSize: 16,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
        gap: 8,
    },
    activeDot: {
        width: 24,
        height: 8,
        borderRadius: 4,
        backgroundColor: color.primary_blue,
    },
    inactiveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: color.light_grey,
    },
});