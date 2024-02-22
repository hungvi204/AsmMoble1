import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/button";

const Settings = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.PersonalInformation}>
                <Text style={styles.name}>Personal Information</Text>
                <TouchableOpacity >
                    <Image style={styles.icon} source={require('../../../assets/icons/edit-2.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.mylistings}>
                <View>
                    <Text style={styles.name1}>Name</Text>
                    <Text style={styles.content}>Nguyễn Hùng Vĩ</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <View>
                    <Text style={styles.name1}>Email</Text>
                    <Text style={styles.content}>vinhpd08351@fpt.edu.vn</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.HelpCenter}>
                <Text style={styles.name}>Help Center</Text>
            </View>
            <View style={styles.settings}>
                <View>
                    <Text style={styles.nameList}>FAQ</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <View>
                    <Text style={styles.nameList}>Contact Us</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <View>
                    <Text style={styles.nameList}>Privacy & Terms</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_right.png')} />
                </TouchableOpacity>
            </View>
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
    PersonalInformation: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 40,
        paddingBottom: 10
    },
    HelpCenter: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 40,
    },
    name: {
        fontSize: 16,
        color: '#909191',
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
        padding: 16,
    },
    name1: {
        fontSize: 12,
        color: '#808080'
    },
    nameList: {
        color: '#4F63AC',
        fontSize: 18,
        fontWeight: 'bold'
    },
    content: {
        color: '#4F63AC',
        fontSize: 14,
        fontWeight: 'bold'
    },
    settings: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginTop: 20,
    },

});

export default React.memo(Settings);
