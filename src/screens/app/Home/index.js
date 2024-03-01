import React, { useState, useEffect } from "react"
import { FlatList, ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header"
import CategoryBox from "../../../components/categoryBox"

import ProductHomeItem from "../../../components/productHomeItem"
import { useNavigation, useIsFocused } from "@react-navigation/native";
import axios from "axios";

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProduct] = useState([]);
    const navigation = useNavigation();
    const [filteredProducts, setFilteredProducts] = useState([]); 
    const [filteredBySearch, setFilteredBySearch] = useState([]);
    const isFocused = useIsFocused();

    const renderCategoryItem = ({ item, index }) => {
        return <CategoryBox title={item?.title} image={item?.image} onPress={() => onCategory(item)} />;
    };

    const renderProductItem = ({ item }) => (
        <ProductHomeItem {...item} onPress={() => onProduct(item.id)} />
    );

    const onProduct = (productId) => {
        navigation.navigate("Product", { productId });
    }
    //lọc danh sách sản phẩm theo title dựa trên mục được chọn
    const onCategory = (selectedCategory) => {
        const selectedCategoryTitle = String(selectedCategory.title);
        // Nếu có danh mục được chọn, thực hiện lọc sản phẩm theo danh mục
        const updatedFilteredProducts = selectedCategoryTitle
            ? products.filter(product => product.category === selectedCategoryTitle)
            : products;
        setFilteredProducts(updatedFilteredProducts);
    };

    //tìm kiếm theo title sản phẩm
    const onSearch = (searchKeyword) => {
        // Cập nhật state để lưu từ khoá tìm kiếm
        setKeyword(searchKeyword);
        const updatedFilteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchKeyword.toLowerCase())//kiểm tra searchKeyword có chứa từ khóa không
        );

        setFilteredBySearch(updatedFilteredProducts);
    };


    const getCategories = async () => {
        return axios.get("http://192.168.11.1:3000/categories")
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching categories:", error);
                return [];
            });
    }

    const getProducts = async () => {
        return axios.get("http://192.168.11.1:3000/products")
            .then(response => response.data)
            .catch(error => {
                console.error("Error fetching products:", error);
                return [];
            });
    }

    useEffect(() => {
        if (isFocused) {
            getCategories().then(data => setCategories(data));// Gọi hàm getCategories để lấy danh sách danh mục và cập nhật state
            getProducts().then(data => {// Gọi hàm getProducts để lấy danh sách sản phẩm và cập nhật state
                setProduct(data);
                setFilteredProducts(data);
            });
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <Header
                style={styles.header}
                showSearch
                onSearch={onSearch}
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
                data={keyword ? filteredBySearch : filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={item => String(item.id)}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
    },
    list: {
        paddingHorizontal: 16,
        position: 'relative'
    },
    productList: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        height: '100%'
    },

})

export default React.memo(Home);