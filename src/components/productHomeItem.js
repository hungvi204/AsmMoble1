import React from "react";
import { Image, Pressable, StyleSheet, Text, Dimensions } from "react-native"
const { width } = Dimensions.get('window'); //lấy thông tin kích thước thiết bị

const ProductHomeItem = ({title, price, image, onPress}) =>{
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    title: {
        color: '#606060',
        paddingVertical: 8,
    },
    image: {
        width: (width - 64) /2,
        height: 220,
        borderRadius: 8
    },
    price: {
        color: '#000000',
        paddingBottom: 8
    }
})

export default React.memo(ProductHomeItem)