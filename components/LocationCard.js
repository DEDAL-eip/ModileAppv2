import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather'

/**
 * @class
 * It's a custom Text component that loads fonts from the assets folder
 * @param props - {}
 * @returns A function that returns a component.
 * @category Component
 */
const LocationButton = (props) => {
    const [isSelected, setIsSelected] = useState(true)

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )
}

const cardColor = '#00B4D8'
const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 25,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: cardColor
    },
    title: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        color: '#FFF',
        fontSize: 16
    }
})

export default LocationButton