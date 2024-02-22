import React, { useState } from "react";
import { Text, View } from "react-native";
import AuthHeader from "../../../components/authHeader";
import { styles } from "./styles";
import Input from "../../../components/input";
import Checkbox from "../../../components/checkbox";
import Button from "../../../components/button";
import Seperator from "../../../components/seperator";
import GoogleLogin from "../../../components/googleLogin";

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate('SignIn')
    }
    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up" />
            <Input label='Name' placeholder='Example Jonh' />
            <Input label='Email' placeholder='example@gmail.com' />
            <Input label='Password' placeholder='*******' isPassword />
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree widt Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title='Sign Up'></Button>
            <Seperator text='Or sign up with'></Seperator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View>
    )
}

export default SignUp;