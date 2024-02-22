import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import AuthHeader from "../../../components/authHeader";
import { styles } from "./styles";
import Input from "../../../components/input";
import Checkbox from "../../../components/checkbox";
import Button from "../../../components/button";
import Seperator from "../../../components/seperator";
import GoogleLogin from "../../../components/googleLogin";

const SignIn = ({navigation}) => {

    const onSignUP = () => {
        navigation.navigate('SignUp')
    }

    const onBack = () => {
        navigation.goBack();
    }

    const Home = () => {
        navigation.navigate('Tabs')
    }

    // const onSpash = () =>{
    //     navigation.navigate('Splash')
    // }
    return (

        <ScrollView style={styles.container}>

            <AuthHeader onBackPress={onBack} title="Sign In" />

            <Input label='Email' placeholder='example@gmail.com' />
            <Input label='Password' placeholder='*******' isPassword />
            <Button style={styles.button} title='Sign In' onPress={Home}></Button>

            <Seperator text='Or sign in with'></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Don’t have an account?
                <Text onPress={onSignUP} style={styles.footerLink}>
                    Sign Up
                </Text>
            </Text>
        </ScrollView>
    )
}

export default SignIn;