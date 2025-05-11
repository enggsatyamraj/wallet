import React from 'react'
import { View } from 'react-native'

interface wrapperProps {
    children: React.ReactNode,
    style?: any
}

export default function Wrapper({ children, style }: wrapperProps) {
    return (
        <View style={[{ paddingHorizontal: 10, paddingVertical: 10 }, style]}>
            {children}
        </View>
    )
}