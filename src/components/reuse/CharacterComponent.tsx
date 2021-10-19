import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CharacterComponent = ({ imageName, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.view}>
            <Image
                resizeMode="cover"
                source={{ uri: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RhcndhcnMlMjBoZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }}
                style={styles.image} />
            <View style={styles.bottomTitleView}>
                <Text style={styles.title}>
                    Spider Man
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: moderateScale(160),
        height: moderateScale(200),
        borderTopLeftRadius: moderateScale(6),
        borderTopRightRadius: moderateScale(6)
    },
    view: {
        width: moderateScale(160),
        height: moderateScale(220),
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowColor: "#000000",
        shadowRadius: 3,
        justifyContent: 'center',
        borderRadius: moderateScale(6),
        marginHorizontal: moderateScale(10),
        paddingBottom: moderateScale(10),
        marginVertical: moderateScale(20),
    },
    bottomTitleView: {
        width: "100%",
        backgroundColor: 'white',
        borderBottomLeftRadius: moderateScale(6),
        borderBottomRightRadius: moderateScale(6)
    },
    title: {
        fontWeight: 'bold',
        fontSize: moderateScale(18),
        marginLeft: moderateScale(5),
        marginVertical: moderateScale(10),
    }
})

export default CharacterComponent;