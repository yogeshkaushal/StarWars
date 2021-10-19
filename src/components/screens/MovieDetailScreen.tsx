import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    ScrollView,
    Image,
} from 'react-native'
import { AuthParamList } from '../../models/navigation-params'
import CharacterComponent from '../reuse/CharacterComponent'

const MovieDetailScreen = () => {

    const description = "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...."

    type NavigationProp = StackNavigationProp<AuthParamList, "CharacterScreen">;
    const navigation = useNavigation<NavigationProp>();

    const onPress = () => {
        navigation.navigate("CharacterScreen")
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    resizeMode="cover"
                    source={require("../../Images/marvel_dummy.jpeg")}
                    style={styles.imageStyle} />
                <View style={styles.bottomView}>
                    <Text style={styles.title}>The Empire Strikes Back</Text>
                    <View style={styles.releaseDateView}>
                        <Text style={styles.releaseDate}>Release: </Text>
                        <Text style={styles.releaseDate}>1980-05-17</Text>
                    </View>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                    <View style={styles.countView}>
                        <Text style={styles.details}>
                            <Text style={[styles.details, styles.count]}>37</Text> Species
                        </Text>
                        <Text style={styles.details}>
                            <Text style={[styles.details, styles.count]}>59</Text> Vehicles
                        </Text>
                        <Text style={styles.details}>
                            <Text style={[styles.details, styles.count]}>36</Text> Planets
                        </Text>
                    </View>
                    <Text style={{ ...styles.title, marginVertical: 10 }}>Characters</Text>
                </View>
                <FlatList
                    data={[1, 2, 3, 4]}
                    horizontal={true}
                    extraData={[1, 2, 3, 4]}
                    contentContainerStyle={styles.flatlist}
                    renderItem={({ item, index }) => {
                        return <CharacterComponent
                            imageName=""
                            onPress={onPress} />
                    }} />
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flexGrow: 1,
    },
    imageStyle: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
    },
    releaseDateView: {
        flexDirection: 'row',

    },
    bottomView: {
        padding: 10
    },
    releaseDate: {
        paddingVertical: 4,
        fontWeight: 'bold',
        color: "green"
    },
    description: {
        textAlign: 'justify',
        lineHeight: 20,
        marginVertical: 5
    },
    titleView: {
        padding: 10,
        paddingLeft: 0,
        backgroundColor: '#800000'
    },
    details: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
    },
    countView: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#A0A0A0",
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: "space-between"
    },
    count: {
        color: "red",
        fontSize: 20
    },
    flatlist: {
        flex: 1,
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
})

export default MovieDetailScreen;