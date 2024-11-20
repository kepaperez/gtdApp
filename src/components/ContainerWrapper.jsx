import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../constants'

const ContainerWrapper = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: colors.blackDark }}>
                <ScrollView style={{ flex: 1, padding: 15, marginTop: 10 }}>
                    {children}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ContainerWrapper

