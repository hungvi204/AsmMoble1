import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/button";
import axios from "axios";

const Profile = ({route}) => {
    const navigation = useNavigation();
    
    
    const onMyListings = () => {
        navigation.navigate("MyListings");
    };

    const onSettings = () => {
        navigation.navigate("Settings");
    };

    const onNewListings = () => {
        navigation.navigate("NewListing");
    };

    const logout = () => {
        navigation.navigate("SignIn");
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
                <TouchableOpacity onPress={logout}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.thongtin}>
                <Text style={styles.name}>Nguyễn Hùng Vĩ</Text>
                <Text style={styles.email}>vinhpd08351@fpt.edu.vn</Text>
            </View>
            <View style={styles.mylistings}>
                <View>
                    <Text style={styles.nameList}>My Listings</Text>
                    <Text style={styles.content}>Already have 10 listing</Text>
                </View>
                <TouchableOpacity onPress={onMyListings}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <View>
                    <Text style={styles.nameList}>Settings</Text>
                    <Text style={styles.content}>Account, FAQ, Contact</Text>
                </View>
                <TouchableOpacity onPress={onSettings}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
            <Button style={styles.button} title='Add a new listing' onPress={onNewListings}></Button>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: '#303030',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    thongtin: {
        paddingTop: 20,
        paddingBottom: 20
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#303030',
        marginBottom: 12
    },
    email: {
        color: '#808080',
        fontSize: 14
    },
    mylistings: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    nameList: {
        color: '#4F63AC',
        fontSize: 18,
        fontWeight: 'bold'
    },
    content: {
        color: '#808080',
        fontSize: 12
    },
    settings: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#FFFFFF',
        padding: 30,
        marginTop: 20,
        marginBottom: 350
    },
    
});

export default React.memo(Profile);
