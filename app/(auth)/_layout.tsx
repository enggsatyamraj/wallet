import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name='loginpage' options={{ headerShown: false }} />
            <Stack.Screen name='onboarding1' options={{ headerShown: false }} />
            <Stack.Screen name='onboarding2' options={{ headerShown: false }} />
        </Stack>
    )
}