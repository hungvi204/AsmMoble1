import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/button";
const Splash = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.img}
                source={require('../../../assets/images/splasg.png')}
            />
            <View style={styles.titleContent}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button
                onPress={() => navigation.navigate('SignUp')}
                title="Sign up"></Button>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.footerText}>Sign in</Text>
            </Pressable>
        </View>
    )
}

export default Splash;