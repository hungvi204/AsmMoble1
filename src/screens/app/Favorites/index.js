import React from "react"
import { ScrollView, StyleSheet, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header"
import { products } from "../../../data/product"
import ProductFravoriteItem from "../../../components/productFravoriteItem"


const Favorite = () => {
    const renderProductItem = ({ item }) => {
        return <ProductFravoriteItem {...item} />
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Favorites' />
            <FlatList
                style={styles.productList}
                data={products}
                renderItem={renderProductItem}
                keyExtractor={item => String(item.id)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    productList: {
        
    }
})

export default React.memo(Favorite);