import React from "react";
import { Image, Pressable, StyleSheet, Text, Dimensions, View } from "react-native"
const { width } = Dimensions.get('window'); //lấy thông tin kích thước thiết bị

const ProductFravoriteItem = ({id, title, price, image, onPress, onDelete }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Pressable onPress={() => onDelete(id)} style={styles.deleteIcon}>
                <Image style={styles.icon} source={require('../assets/icons/Shape.png')} />
            </Pressable>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
    },
    title: {
        fontSize: 14,
        color: '#606060',
        paddingVertical: 8,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 8,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000',
        paddingBottom: 8,
    },
    deleteIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 8,
    },
    icon: {
        width: 24,
        height: 24
    },
    
})

export default React.memo(ProductFravoriteItem)