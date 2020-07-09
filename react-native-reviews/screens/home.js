import React, { useState } from 'react'
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {
    const [reviews, setReviews] = useState([
        {title: 'Pokemon Red', rating: 1, body: 'yeah it\'s the first one', key: '1 '},
        {title: 'Pokemon Blue', rating: 2, body: 'yeah it\'s the second one', key: '2 '},
        {title: 'Pokemon Yellow', rating: 3, body: 'yeah it\'s the third one', key: '3 '},
    ]) 

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails'), item}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
        </View>
    )
}

export default Home

