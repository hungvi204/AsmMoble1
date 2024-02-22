import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

const CategoryBox = ({title, image, onPress }) => {
    return (
    <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}}></Image>
        </View>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
)
}

const styles = StyleSheet.create({
container: {
    padding: 10,
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},
title: {
    color: '#8D9BB5'
},
image: {
    width: 32,
    height: 32
},
imageContainer: {
    backgroundColor: '#DADADA',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8
}
})

export default React.memo(CategoryBox)