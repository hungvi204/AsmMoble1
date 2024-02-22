import React, { useState } from "react"
import { FlatList, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header"
import { categories } from "../../../data/categories"
import CategoryBox from "../../../components/categoryBox"
import { products } from "../../../data/product"
import ProductHomeItem from "../../../components/productHomeItem"
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const navigation = useNavigation();

    const renderCategoryItem = ({ item, index }) => {
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    }

    const renderProductItem = ({ item }) => (
        <TouchableOpacity onPress={() => onProduct(item)}>
            <ProductHomeItem {...item} />
        </TouchableOpacity>
    );

    const onProduct = () => {
        navigation.navigate("Product");
    }
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