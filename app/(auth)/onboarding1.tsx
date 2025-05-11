import { color } from '@/utils/color'
import { App_name } from '@/utils/const'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function Onboarding1() {
    const handleNext = () => {
        router.push('/(auth)/onboarding2')
    }

    return (
        <View style={{ flex: 1, backgroundColor: color.white }}>
            <StatusBar barStyle="dark-content" backgroundColor={color.white} />

            <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}>
                {/* App Logo with Google Colors */}
                <View style={{
                    alignItems: 'center',
                    marginTop: height * 0.08,
                    marginBottom: height * 0.05
                }}>
                    {/* Google-style 4-color icon */}
                    <View style={{
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
                        elevation: 2
                    }}>
                        {/* Top left - Blue */}
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 40,
                            height: 40,
                            backgroundColor: color.primary_blue
                        }} />

                        {/* Top right - Red */}
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 40,
                            height: 40,
                            backgroundColor: color.primary_red
                        }} />

                        {/* Bottom left - Green */}
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: 40,
                            height: 40,
                            backgroundColor: color.primary_green
                        }} />

                        {/* Bottom right - Yellow */}
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 40,
                            height: 40,
                            backgroundColor: color.primary_yellow
                        }} />

                        {/* Centered icon */}
                        <View style={{
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
                            elevation: 1
                        }}>
                            <MaterialIcons name="account-balance-wallet" size={24} color={color.primary_blue} />
                        </View>
                    </View>

                    <Text style={{
                        fontSize: 24,
                        fontWeight: '500',
                        color: color.black,
                        marginTop: 16
                    }}>
                        {App_name}
                    </Text>
                </View>

                {/* Feature Cards */}
                <View style={{ marginBottom: 32 }}>
                    {/* Feature 1 */}
                    <View style={{
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
                        elevation: 1
                    }}>
                        <View style={{
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            backgroundColor: color.light_grey,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 16
                        }}>
                            <MaterialIcons name="insights" size={24} color={color.primary_blue} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: color.black,
                                marginBottom: 2
                            }}>
                                Track Your Expenses
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: color.grey,
                                lineHeight: 20
                            }}>
                                Record and categorize your daily spending
                            </Text>
                        </View>
                    </View>

                    {/* Feature 2 */}
                    <View style={{
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
                        elevation: 1
                    }}>
                        <View style={{
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            backgroundColor: color.light_grey,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 16
                        }}>
                            <MaterialIcons name="bar-chart" size={24} color={color.primary_green} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: color.black,
                                marginBottom: 2
                            }}>
                                Visualize Your Budget
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: color.grey,
                                lineHeight: 20
                            }}>
                                See charts and insights about your spending
                            </Text>
                        </View>
                    </View>

                    {/* Feature 3 */}
                    <View style={{
                        backgroundColor: color.surface,
                        borderRadius: 12,
                        padding: 16,
                        flexDirection: 'row',
                        alignItems: 'center',
                        shadowColor: color.black,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.05,
                        shadowRadius: 2,
                        elevation: 1
                    }}>
                        <View style={{
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            backgroundColor: color.light_grey,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 16
                        }}>
                            <MaterialIcons name="trending-up" size={24} color={color.primary_red} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: color.black,
                                marginBottom: 2
                            }}>
                                Achieve Your Goals
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                color: color.grey,
                                lineHeight: 20
                            }}>
                                Set financial goals and track your progress
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Title and Description */}
                <View style={{ marginBottom: 32 }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: '500',
                        color: color.black,
                        textAlign: 'center',
                        marginBottom: 8
                    }}>
                        Smart money management
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: color.grey,
                        textAlign: 'center',
                        lineHeight: 22,
                        paddingHorizontal: 12
                    }}>
                        Take control of your finances with our simple and efficient tools
                    </Text>
                </View>

                {/* Next Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: color.primary_blue,
                        paddingVertical: 14,
                        borderRadius: 8,
                        alignItems: 'center',
                        marginBottom: 12,
                        shadowColor: color.black,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 1
                    }}
                    onPress={handleNext}
                >
                    <Text style={{
                        color: color.white,
                        fontWeight: '500',
                        fontSize: 16
                    }}>
                        Next
                    </Text>
                </TouchableOpacity>

                {/* Pagination Dots */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 16,
                    gap: 8
                }}>
                    <View style={{
                        width: 24,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: color.primary_blue
                    }} />
                    <View style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: color.light_grey
                    }} />
                </View>
            </SafeAreaView>
        </View>
    )
}