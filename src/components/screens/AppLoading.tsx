import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default () => (
    <View style={styles.centered}>
        <ActivityIndicator size="large" color="#EE5A35" />
    </View>
)

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})