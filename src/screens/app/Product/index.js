import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Pressable } from 'react-native';
import Button from '../../../components/button';
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

const Product = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    const { productId } = route.params || {};
    const [product, setProduct] = useState(null);
    
    const onBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        // Fetch data for the specific product using the productId
        if (productId) {
            axios.get(`http://192.168.0.9:3000/products/${productId}`)
                .then(response => setProduct(response.data))
                .catch(error => {
                    console.error("Error fetching product details:", error);
                    setProduct(null);
                });
        }
    }, [productId]);

    if (!product) {
        return (
            // You can handle loading state or display an error message here
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Sử dụng URL hình ảnh từ dữ liệu sản phẩm */}
                <Image
                    source={{ uri: product.image }}
                    style={styles.headerImage}
                />
            </View>

            {/* Body */}
            <View style={styles.body}>
                <Text style={styles.tripInfo}>{product.title}</Text>
                <Text style={styles.tripPrice}>${product.price}</Text>
                <Text style={styles.tripDescription}>{product.description}</Text>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                {/* Favorite button */}
                <TouchableOpacity style={styles.favorite}>
                    <Image style={styles.iconFavorite} source={require('../../../assets/tabs/bookmark_active.png')} />
                </TouchableOpacity>
                {/* Contact Seller button */}
                <Button style={styles.button} title='Contact Seller' />
            </View>

            {/* Back button */}
            <TouchableOpacity style={styles.headerIcon} onPress={onBack}>
                <Image style={styles.back} source={require('../../../assets/icons/logout_left.png')} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    header: {
        flex: 7,
    },
    headerImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%'
    },
    tripTitle: {
        overflow: 'hidden',
        fontSize: 17,
        paddingTop: 20,
        fontWeight: '400',
        fontFamily: 'Roboto-Thin'
    },
    headerIcon: {
        position: 'absolute',
        flexDirection: 'column',
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 32,
        borderRadius: 6,
        top: 52
    },
    
    tripInfo: {
        color: '#303030',
        fontSize: 24,
        paddingTop: 15,
        fontWeight: '500',
        paddingBottom: 15
    },
    content: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto-ThinItalic',
        color: 'white'
    },
    body: {
        flex: 3,
        paddingHorizontal: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        position: 'absolute',
        top: '60%',
        width: '100%',
        height: '100%',
    },
    footer: {
        height: 100,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    favorite: {
        backgroundColor: '#F0F0F0',
        width: 60,
        height: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconFavorite: {
        width: 24,
        height: 24,
    },
    button: {
        margin: 20,
        width: '80%'
    }

})
export default Product