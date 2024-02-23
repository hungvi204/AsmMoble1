import React, { useState } from "react";
import { Text, View, Alert, TextInput } from "react-native";
import AuthHeader from "../../../components/authHeader";
import { styles } from "./styles";
import Input from "../../../components/input";
import Checkbox from "../../../components/checkbox";
import Button from "../../../components/button";
import Seperator from "../../../components/seperator";
import GoogleLogin from "../../../components/googleLogin";
import axios from "axios";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = () => {
        navigation.navigate('SignIn');
    }

    const onBack = () => {
        navigation.goBack();
    }

    const handleSignUp = async () => {
        if (!name || !email || !password || !checked) {
            Alert.alert('Error', 'Vui lòng nhập email và mật khẩu');
            return;
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Checked:', checked);


        try {
            const response = await axios.post('https://65d466d93f1ab8c634350653.mockapi.io/signup', {
                name: name,
                email: email,
                password: password
            });

            if (response.status === 201) {
                Alert.alert('Success', 'Đăng ký thành công');
                navigation.navigate('SignIn');
            } else {
                Alert.alert('Error', 'Đăng ký thất bại');
            }
        } catch (error) {
            console.error('Error during sign up:', error.message);
            Alert.alert('Error', 'Đã có lỗi xảy ra');
        }
    };

    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up" />
            <Input
                label='Name'
                placeholder='Example John'
                value={name}
                onChangeText={text => setName(text)}
            />

            <Input
                label='Email'
                placeholder='example@gmail.com'
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Input
                label='Password'
                placeholder='*******'
                isPassword
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title='Sign Up' onPress={handleSignUp}></Button>
            <Seperator text='Or sign up with'></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View>
    );
}

export default SignUp;
