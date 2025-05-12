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

export default function Onboarding2() {
    const handleGetStarted = () => {
        // Navigate to the main app
        router.replace('/loginpage')
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

                    {/* Feature Highlight - Smart Goals */}
                    <View style={styles.featuresContainer}>
                        {/* Goal Progress Card */}
                        <View style={styles.goalCard}>
                            <View style={styles.goalHeader}>
                                <View style={styles.goalIconContainer}>
                                    <MaterialIcons name="home" size={24} color={color.primary_green} />
                                </View>
                                <View>
                                    <Text style={styles.goalTitle}>Home Down Payment</Text>
                                    <Text style={styles.goalSubtitle}>Goal: ₹300,000</Text>
                                </View>
                                <View style={styles.percentageContainer}>
                                    <Text style={styles.percentageText}>75%</Text>
                                </View>
                            </View>

                            {/* Progress Bar */}
                            <View style={styles.progressBarContainer}>
                                <View style={styles.progressBar} />
                            </View>

                            <View style={styles.progressDetailsContainer}>
                                <Text style={styles.progressDetailText}>Current: ₹225,000</Text>
                                <Text style={styles.progressDetailText}>Remaining: ₹75,000</Text>
                            </View>
                        </View>

                        {/* Smart Recommendations */}
                        <View style={styles.recommendationsCard}>
                            <View style={styles.recommendationsHeader}>
                                <MaterialIcons name="lightbulb" size={24} color={color.primary_blue} style={styles.lightbulbIcon} />
                                <Text style={styles.recommendationsTitle}>
                                    Smart Recommendations
                                </Text>
                            </View>

                            {/* Blue recommendation */}
                            <View style={[styles.recommendationItem, { borderLeftColor: color.primary_blue }]}>
                                <Text style={styles.recommendationTitle}>
                                    Reduce restaurant expenses by 15%
                                </Text>
                                <Text style={styles.recommendationDescription}>
                                    Can save you ₹2,500 this month
                                </Text>
                            </View>

                            {/* Green recommendation (changed from red) */}
                            <View style={[styles.recommendationItem, { borderLeftColor: color.primary_green }]}>
                                <Text style={styles.recommendationTitle}>
                                    Redirect subscription savings
                                </Text>
                                <Text style={styles.recommendationDescription}>
                                    Can help reach your goal 2 months faster
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Title and Description */}
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Financial Goals & Insights
                        </Text>

                        <Text style={styles.description}>
                            Set personalized financial goals and get intelligent recommendations to achieve them faster
                        </Text>
                    </View>
                </ScrollView>

                {/* Footer with button and pagination - fixed at bottom */}
                <View style={styles.footer}>
                    {/* Get Started Button */}
                    <LinearGradient
                        colors={[color.primary_green, color.primary_green_dark]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.buttonGradient}
                    >
                        <TouchableOpacity
                            style={styles.getStartedButton}
                            onPress={handleGetStarted}
                        >
                            <Text style={styles.getStartedButtonText}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    {/* Pagination Dots */}
                    <View style={styles.paginationContainer}>
                        <View style={styles.inactiveDot} />
                        <View style={styles.activeDot} />
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
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    goalCard: {
        backgroundColor: color.surface,
        width: '100%',
        borderRadius: 16,
        padding: 16,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 20,
    },
    goalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    goalIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.light_green,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    goalTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: color.black,
    },
    goalSubtitle: {
        fontSize: 12,
        color: color.grey,
    },
    percentageContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    percentageText: {
        fontSize: 16,
        fontWeight: '600',
        color: color.primary_green,
    },
    progressBarContainer: {
        height: 8,
        backgroundColor: color.light_grey,
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        width: '75%',
        backgroundColor: color.primary_green,
        borderRadius: 4,
    },
    progressDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    progressDetailText: {
        fontSize: 12,
        color: color.grey,
    },
    recommendationsCard: {
        backgroundColor: color.surface_variant,
        width: '100%',
        borderRadius: 16,
        padding: 16,
    },
    recommendationsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    lightbulbIcon: {
        marginRight: 8,
    },
    recommendationsTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: color.black,
    },
    recommendationItem: {
        backgroundColor: color.white,
        borderRadius: 12,
        padding: 12,
        marginBottom: 8,
        borderLeftWidth: 3,
    },
    recommendationTitle: {
        fontSize: 14,
        color: color.black,
        fontWeight: '500',
    },
    recommendationDescription: {
        fontSize: 12,
        color: color.grey,
        marginTop: 4,
    },
    titleContainer: {
        marginTop: 20,
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
    getStartedButton: {
        paddingVertical: 14,
        alignItems: 'center',
    },
    getStartedButtonText: {
        color: color.white,
        fontWeight: '500',
        fontSize: 16,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 8,
    },
    activeDot: {
        width: 24,
        height: 8,
        borderRadius: 4,
        backgroundColor: color.primary_green,
    },
    inactiveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: color.light_grey,
    },
});