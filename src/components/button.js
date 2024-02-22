import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ title, onPress, style }) => {
    const handlePress = () => {
        console.log('Click')
    };
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={[styles.container, style]}>
            <Text style={styles.textContent}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4F63AC',
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '100%'
    },
    textContent: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default React.memo(Button);
