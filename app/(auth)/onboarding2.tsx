import { color } from '@/utils/color'
import { App_name } from '@/utils/const'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

export default function Onboarding2() {
    const handleGetStarted = () => {
        // Navigate to the main app
        // router.replace('/dashboard')
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

                {/* Feature Highlight - Smart Goals */}
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 24
                }}>
                    {/* Goal Progress Card */}
                    <View style={{
                        backgroundColor: color.surface,
                        width: '100%',
                        borderRadius: 16,
                        padding: 16,
                        shadowColor: color.black,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 2,
                        marginBottom: 20
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: color.light_green,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 12
                            }}>
                                <MaterialIcons name="home" size={24} color={color.primary_green} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: color.black }}>Home Down Payment</Text>
                                <Text style={{ fontSize: 12, color: color.grey }}>Goal: ₹300,000</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: color.primary_green }}>75%</Text>
                            </View>
                        </View>

                        {/* Progress Bar */}
                        <View style={{
                            height: 8,
                            backgroundColor: color.light_grey,
                            borderRadius: 4,
                            overflow: 'hidden'
                        }}>
                            <View style={{
                                height: '100%',
                                width: '75%',
                                backgroundColor: color.primary_green,
                                borderRadius: 4
                            }} />
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 8
                        }}>
                            <Text style={{ fontSize: 12, color: color.grey }}>Current: ₹225,000</Text>
                            <Text style={{ fontSize: 12, color: color.grey }}>Remaining: ₹75,000</Text>
                        </View>
                    </View>

                    {/* Smart Recommendations */}
                    <View style={{
                        backgroundColor: color.surface_variant,
                        width: '100%',
                        borderRadius: 16,
                        padding: 16
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 16
                        }}>
                            <MaterialIcons name="lightbulb" size={24} color={color.primary_yellow} style={{ marginRight: 8 }} />
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: color.black
                            }}>
                                Smart Recommendations
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: color.white,
                            borderRadius: 12,
                            padding: 12,
                            marginBottom: 8,
                            borderLeftWidth: 3,
                            borderLeftColor: color.primary_blue
                        }}>
                            <Text style={{ fontSize: 14, color: color.black, fontWeight: '500' }}>
                                Reduce restaurant expenses by 15%
                            </Text>
                            <Text style={{ fontSize: 12, color: color.grey, marginTop: 4 }}>
                                Can save you ₹2,500 this month
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: color.white,
                            borderRadius: 12,
                            padding: 12,
                            borderLeftWidth: 3,
                            borderLeftColor: color.primary_red
                        }}>
                            <Text style={{ fontSize: 14, color: color.black, fontWeight: '500' }}>
                                Redirect subscription savings
                            </Text>
                            <Text style={{ fontSize: 12, color: color.grey, marginTop: 4 }}>
                                Can help reach your goal 2 months faster
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
                        Financial Goals & Insights
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: color.grey,
                        textAlign: 'center',
                        lineHeight: 22,
                        paddingHorizontal: 12
                    }}>
                        Set personalized financial goals and get intelligent recommendations to achieve them faster
                    </Text>
                </View>

                {/* Get Started Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: color.primary_green,
                        paddingVertical: 14,
                        borderRadius: 8,
                        alignItems: 'center',
                        marginBottom: 24,
                        shadowColor: color.black,
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 1
                    }}
                    onPress={handleGetStarted}
                >
                    <Text style={{
                        color: color.white,
                        fontWeight: '500',
                        fontSize: 16
                    }}>
                        Get Started
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
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: color.light_grey
                    }} />
                    <View style={{
                        width: 24,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: color.primary_green
                    }} />
                </View>
            </SafeAreaView>
        </View>
    )
}