import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, FlatList, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/header";
import ProductFravoriteItem from "../../../components/productFravoriteItem";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import axios from "axios";

const Favorite = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused(); // Hook to check if the screen is focused


    const getAPI = async () => {
        try {
            const response = await axios.get("http://192.168.11.1:3000/favorites");
            setFavoriteProducts(response.data);
        } catch (error) {
            console.error("Error fetching favorite products:", error);
        }
    };

    const deleteFavoriteProduct = async (productId) => {
        try {
            console.log(productId)
            await axios.delete(`http://192.168.11.1:3000/favorites/${productId}`);
            // Sau khi xóa thành công, cập nhật lại sản phẩm yêu thích
            getAPI();
        } catch (error) {
            console.error("Error deleting favorite product:", error);
        }
    };

    useEffect(() => {
        if (isFocused) {
            getAPI();
        }
    }, [isFocused]);

    const renderProductItem = ({ item }) => (
        <TouchableOpacity >
            <ProductFravoriteItem {...item} onDelete={() => deleteFavoriteProduct(item.id)}/>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Favorites" />

            {favoriteProducts.length > 0 ? (
                <FlatList
                    style={styles.productList}
                    data={favoriteProducts}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => String(item.id)}
                />
            ) : (
                <View style={styles.noFavoritesContainer}>
                    <Text style={styles.noFavoritesText}>No favorite products found.</Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    productList: {},
    noFavoritesContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    noFavoritesText: {
        fontSize: 16,
        color: "gray",
    },
});

export default React.memo(Favorite);
