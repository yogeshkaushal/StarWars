import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
} from 'react-native'
import { AuthParamList } from '../../models/navigation-params'
import { gql, useQuery } from '@apollo/client';
import { EpisodeComponent } from '../reuse'

const description = "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...."

const EpisodesTab = () => {

    type NavigationProp = StackNavigationProp<AuthParamList, "TabScreens">;
    const navigation = useNavigation<NavigationProp>();

    const MOVIES_QUERY = gql`
    {
        allFilms{
            films{
                title
                id
                releaseDate
                openingCrawl
            }
      }
    }`

    const res = useQuery(MOVIES_QUERY)
    console.log(res, "responseIS")


    const onPress = () => {
        navigation.navigate("MovieDetailScreen")
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => {
                    return (
                        <EpisodeComponent
                            movie={item}
                            description={description}
                            onPress={onPress} />)
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default EpisodesTab;