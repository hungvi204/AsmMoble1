import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../components/input";

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput,] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../assets/icons/icon_back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../assets/icons/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}

                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../assets/icons/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
            </View>

    
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder='Type your keyword...' />
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    title: {
        color: '#303030',
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 24,
        height: 24
    },
    space: {
        width: 24
    }
})
export default React.memo(Header)