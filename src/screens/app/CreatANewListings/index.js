import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/button";
import Input from "../../../components/input";

const NewListing = () => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_left.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Create A New Listing</Text>
            </View>
            <View>
                <Text style={styles.upload}>Uploads photos</Text>
            </View>
            <View style={styles.containerUpload}>
                <TouchableOpacity style={styles.uploadphoto}>
                    <TouchableOpacity style={styles.uploadEllip}>
                        <Image source={require('../../../assets/icons/ellip.png')} />
                    </TouchableOpacity>
                    <Image style={styles.uploadIcon} source={require('../../../assets/icons/+.png')} />
                </TouchableOpacity>
                <View style={styles.imgUpload}>
                    <Image source={require('../../../assets/images/imageUpload.png')} />
                    <TouchableOpacity style={styles.iconxContainer}>
                        <Image style={styles.iconx} source={require('../../../assets/icons/Shape.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Input label='Title' placeholder='Listing Title' />
            </View>
            <View style={{ position: 'relative' }}>
                <Input label='Category' placeholder='Select the category' />
                <Image source={require('../../../assets/icons/bottom.png')} style={{ position: 'absolute', right: 10, top: 50, width: 24, height: 24 }}/>
            </View>

            <View>
                <Input label='Price' placeholder='Enter price in USD' />
            </View>
            <View>
                <Input style={styles.description} label='Description' placeholder='Tell us more...' />
            </View>
            <Button title='Submit' />

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
    upload: {
        fontSize: 14,
        color: '#4F63AC',
        marginTop: 20,
        marginBottom: 10
    },
    containerUpload: {
        flexDirection: 'row'
    },
    uploadImage: {
        width: 90,
        height: 90
    },
    uploadEllip: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }],
    },
    uploadphoto: {
        width: 90,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 10, // Đặt giá trị này để bo góc
        borderStyle: 'dashed', // Đặt kiểu đường viền là đứt
        borderWidth: 1, // Đặt độ rộng của đường viền
        borderColor: '#909191', // Đặt màu sắc của đường viền    
        position: 'relative',
        marginRight: 10
    },
    uploadIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -8 }, { translateY: -9 }],
    },
    imgUpload: {
        width: 90,
        height: 90,
        position: 'relative',
    },
    iconxContainer: {
        position: 'absolute',
        top: -10, 
        right: -10,
    },
    iconx: {
        width: 24,
        height: 24
    },
    description: {
        height: 150
    }
});

export default React.memo(NewListing);
