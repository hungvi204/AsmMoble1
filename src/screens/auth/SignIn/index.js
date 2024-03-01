import React, { useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import AuthHeader from "../../../components/authHeader";
import { styles } from "./styles";
import Input from "../../../components/input";
import Checkbox from "../../../components/checkbox";
import Button from "../../../components/button";
import Seperator from "../../../components/seperator";
import GoogleLogin from "../../../components/googleLogin";
import axios from "axios";

const SignIn = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignUP = () => {
        navigation.navigate('SignUp')
    }

    const onBack = () => {
        navigation.goBack();
    }

    const Home = () => {
        navigation.navigate('Tabs')
    }

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Lỗi', 'Vui lòng nhập email và mật khẩu');
            return;
        }
    
        console.log('Email:', email);
        console.log('Mật khẩu:', password);
    
        try {
            const response = await axios.get('https://65d466d93f1ab8c634350653.mockapi.io/signup', {
                params: {
                    name: name,
                    email: email,
                    password: password
                }
            });
    
            if (response.status === 200 && response.data) {
                Alert.alert('Thành công', 'Đăng nhập thành công');
                
                navigation.navigate('Tabs');
            } else {
                Alert.alert('Lỗi', 'Đăng nhập thất bại');
            }
        } catch (error) {
            console.error('Lỗi trong quá trình đăng nhập:', error.message);
            Alert.alert('Lỗi', 'Đã có lỗi xảy ra');
        }
    }
    
    // const onSpash = () =>{
    //     navigation.navigate('Splash')
    // }
    return (

        <ScrollView style={styles.container}>

            <AuthHeader onBackPress={onBack} title="Sign In" />

            <Input
                label='Email'
                placeholder='example@gmail.com'
                value={email.toString()}
                onChangeText={text => setEmail(text)}
            />

            <Input
                label='Password'
                placeholder='*******'
                isPassword
                value={password.toString()}
                onChangeText={text => setPassword(text)}
            />
            <Button style={styles.button} title='Sign In' onPress={handleSignIn}></Button>

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