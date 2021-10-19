import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    FlatList,
    Image,
} from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { AuthParamList } from '../../models/navigation-params'
import { EpisodeComponent } from '../reuse'

const description = "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...."

const CharacterScreen = () => {

    type NavigationProp = StackNavigationProp<AuthParamList, "CharacterScreen">;
    const navigation = useNavigation<NavigationProp>();

    const onClickMovies = () => {
        navigation.push("MovieDetailScreen")
    }

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.upperView}>
                <Image
                    // resizeMode="cover"
                    source={{ uri: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RhcndhcnMlMjBoZXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }}
                    style={styles.image} />
                <View style={styles.bottomView}>
                    <Text numberOfLines={1} style={styles.title}>Spider Man</Text>
                    <Text style={styles.birthYear}>112BBY</Text>
                    <Text style={styles.details}>
                        <Text style={[styles.details, styles.count]}>172</Text> CM Height
                    </Text>
                    <Text style={styles.details}>
                        <Text style={[styles.details, styles.count]}>77</Text> Mass
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.likeButtonStyle}>
                <Text style={styles.likeButtonText}>Like</Text>
            </TouchableOpacity>
            <Text style={{ ...styles.title, margin: moderateScale(15) }}>Movies</Text>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => {
                    return (
                        <EpisodeComponent
                            description={description}
                            onPress={onClickMovies} />)
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
    },
    details: {
        fontWeight: 'bold',
        fontSize: moderateScale(11),
        color: "grey",
        marginVertical: 5,
    },
    count: {
        color: "red",
    },
    title: {
        fontWeight: "bold",
        fontSize: moderateScale(20),
    },
    image: {
        width: moderateScale(120),
        aspectRatio: 1,
        borderRadius: moderateScale(150),

    },
    upperView: {
        padding: moderateScale(10),
        flexDirection: 'row'
    },
    bottomView: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: moderateScale(10)
    },
    birthYear: {
        paddingVertical: moderateScale(4),
        fontWeight: 'bold',
        color: "green"
    },
    likeButtonStyle: {
        backgroundColor: '#EE5A35',
        padding: moderateScale(10),
        alignSelf: 'center',
        width: "95%",
        alignItems: 'center',
        borderRadius: moderateScale(5)
    },
    likeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default CharacterScreen;