import React from "react";
import { Image, Pressable, Text, View , StyleSheet} from "react-native";


const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onBackPress}>
                <Image
                style={styles.iconBack}
                source={require('../assets/icons/icon_back.png')}
                ></Image>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },
    iconBack: {
        width: 18,
        height: 18,
        marginLeft: 10,
        marginTop: 10
    },
    title: {
        color: '#4F63AC',
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 10,
        marginTop: 10   
    }
})

export default AuthHeader;