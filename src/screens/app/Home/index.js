import React, { useState, useEffect } from "react"
import { FlatList, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header"
import CategoryBox from "../../../components/categoryBox"

import ProductHomeItem from "../../../components/productHomeItem"
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProduct] = useState([]);
    const navigation = useNavigation();

    const renderCategoryItem = ({ item, index }) => {
        return <CategoryBox title={item?.title} image={item?.image} onPress={() => onCategory(item)} />;
    };

    const renderProductItem = ({ item }) => (
        <ProductHomeItem {...item} onPress={() => onProduct(item.id)} />
    );

    const onProduct = (productId) => {
        navigation.navigate("Product", { productId });
    }
    const onCategory = () => {

    }

    const getCategories =  async () => {
        return axios.get("http://192.168.0.9:3000/categories")
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching categories:", error);
                return [];
            });
    }
    const getProducts =  async () => {
        return axios.get("http://192.168.0.9:3000/products")
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching products:", error);
                return [];
            });
    }

    useEffect(() => {
        // Fetch data from the API
        getCategories().then(data => setCategories(data));
        getProducts().then(data => setProduct(data));
    }, []);

    return (
        <SafeAreaView >
            <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title='Find All You Need'
            />

            <FlatList
                showsHorizontalScrollIndicator={false}// ẩn thanh cuộn
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}
            />
            <FlatList
                style={styles.productList}
                numColumns={2}
                data={products}
                renderItem={renderProductItem}
                keyExtractor={item => String(item.id)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    list: {
        paddingVertical: 24,
        marginTop: 16
    },
    productList: {
        paddingHorizontal: 16
    }
})

export default React.memo(Home);