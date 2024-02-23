import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,Image, Pressable } from 'react-native';

const Input = ({ label, placeholder, isPassword,value, onChangeText }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    secureTextEntry={isPassword && !isPasswordVisible}
                    placeholder={placeholder}
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                    <Image
                      style={styles.eye}
                      source={
                        isPasswordVisible
                          ? require('../assets/icons/eye.png')
                          : require('../assets/icons/eye_closed.png')
                      }
                    />
                  </Pressable>
                  
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: '#4F63AC',
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#B9B5B5',
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
});

export default Input;
