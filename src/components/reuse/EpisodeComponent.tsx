import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const EpisodeComponent = ({ description, onPress, movie }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.container}>
            <Image
                resizeMode="cover"
                source={require("../../Images/marvel_dummy.jpeg")}
                style={styles.imageStyle} />
            <View style={styles.bottomView}>
                <Text style={styles.title}>The Empire Strikes Back</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.description}>
                    {description.substring(0, 50).trim() + "..."}
                </Text>
                <Text style={styles.releaseDate}>1980-05-17</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // overflow: 'hidden',
        width: "95%",
        alignSelf: 'center',
        backgroundColor: 'white',
        marginVertical: moderateScale(10),
        borderRadius: moderateScale(7),
        shadowOpacity: 0.35,
        shadowOffset: {
            width: 0,
            height: moderateScale(3)
        },
        shadowColor: "#000000",
        shadowRadius: moderateScale(3),
    },
    imageStyle: {
        width: '100%',
        height: moderateScale(200),
        borderTopRightRadius: moderateScale(7),
        borderTopLeftRadius: moderateScale(7),
    },
    title: {
        fontWeight: "bold",
        fontSize: moderateScale(17)
    },
    bottomView: {
        padding: moderateScale(10)
    },
    releaseDate: {
        paddingVertical: 4,
        fontWeight: 'bold',
        color: "#A9A9A9"
    },
    description: {
        textAlign: 'justify',
        marginVertical: moderateScale(5)
    }
})

export default EpisodeComponent;