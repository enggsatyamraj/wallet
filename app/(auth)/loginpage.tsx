import WalletLogo from "@/components/WalletLogo";
import Wrapper from "@/components/Wrapper";
import { color } from "@/utils/color";
import { App_name } from "@/utils/const";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginPage() {
    const [pulseAnim] = useState(new Animated.Value(0));
    const [login, setLogin] = useState<any>("login");
    const translateX = useRef(new Animated.Value(0)).current;

    const moveRight = () => {
        Animated.timing(translateX, {
            toValue: 90,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const moveLeft = () => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    const handleShowSignup = () => {
        moveRight();
        setLogin("signup")
    }

    const handleShowLogin = () => {
        moveLeft();
        setLogin("login");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Wrapper
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <WalletLogo size="large" />

                {/* Subtle shadow beneath the logo */}
                <Animated.View
                    style={[
                        styles.logoShadow,
                        {
                            opacity: pulseAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.15, 0.05],
                            }),
                            transform: [
                                {
                                    scale: pulseAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.9, 1.05],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                <Text
                    style={{
                        fontSize: 32,
                        fontWeight: "600",
                        color: color.black,
                        letterSpacing: 0.5,
                        marginBottom: 8,
                    }}
                >
                    {App_name}
                </Text>
                <View style={styles.gradientLineContainer}>
                    <LinearGradient
                        colors={[color.primary_blue, color.primary_green]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientLine}
                    />
                </View>
                <View
                    // @ts-ignore
                    style={{
                        flexDirection: "row",
                        width: "200",
                        // borderWidth: 2,
                        // borderColor: "red",
                        // maxWidth: 200,
                        // paddingHorizontal: 10,
                        // paddingVertical: 10,
                        padding: 5,
                        backgroundColor: "#e8eaed",
                        borderRadius: 10,
                        position: "relative",
                    }}
                >
                    <TouchableOpacity
                        onPress={handleShowLogin}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            borderRadius: 5,
                            zIndex: 100,
                            // backgroundColor: login === 'login' ? "#fff" : 'transparent',
                        }}
                    >
                        <Text style={styles.heading}>Login</Text>
                    </TouchableOpacity>

                    <Animated.View
                        style={{
                            width: 100,
                            backgroundColor: "#fff",
                            height: "100%",
                            position: "absolute",
                            top: 5,
                            left: 5,
                            borderRadius: 7,
                            transform: [{ translateX }],
                        }}
                    ></Animated.View>

                    <TouchableOpacity
                        onPress={handleShowSignup}
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: login === 'signup' ? "#fff" : 'transparent',
                        }}
                    >
                        <Text style={styles.heading}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </Wrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logoShadow: {
        position: "absolute",
        width: 75,
        height: 12,
        borderRadius: 50,
        backgroundColor: color.black,
        bottom: -12,
        zIndex: -1,
        alignSelf: "center",
    },
    gradientLineContainer: {
        width: 40,
        height: 3,
        marginBottom: 16,
        overflow: "hidden",
        borderRadius: 3,
    },
    gradientLine: {
        height: "100%",
        width: "100%",
    },
    heading: {
        fontSize: 16,
        fontWeight: "500",
    },
});
