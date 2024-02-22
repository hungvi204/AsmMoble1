import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Separator = ({ text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        height: 1,
        backgroundColor: '#DADADA',
        flex: 1,
    },
    text: {
        color: '#4F63AC',
        fontWeight: '500',
        marginHorizontal: 8,
    },
});

export default React.memo(Separator);
