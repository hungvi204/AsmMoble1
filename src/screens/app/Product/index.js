import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, Pressable } from 'react-native';
import Button from '../../../components/button';
import { useNavigation } from "@react-navigation/native";

const Product = () => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/images/Mask.png')}
                    style={styles.headerImage}
                />
            </View>

            <View style={styles.body}>
                <Text style={styles.tripInfo}> Minimal Stand</Text>
                <Text style={{ color: 'black', fontSize: 0, fontWeight: 'bold' }}>$ 50</Text>
                <Text style={styles.tripTitle} numberOfLines={6} ellipsizeMode="tail">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.favorite}>
                    <Image style={styles.iconFavorite} source={require('../../../assets/tabs/bookmark_active.png')} />
                </TouchableOpacity>
                <Button style={styles.button} title='Contact Seller' />
            </View>
            <TouchableOpacity style={{ ...styles.headerIcon }} onPress={onBack}>
                <TouchableOpacity onPress={onBack}>
                    <Image style={styles.back} source={require('../../../assets/icons/logout_left.png')} />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
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