import React from "react"
import { ScrollView, StyleSheet, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header"
import { products } from "../../../data/product"
import ProductProfileItem from "../../../components/productMyListingsItem"


const MyListings = () => {
    const renderProductItem = ({ item }) => {
        return <ProductProfileItem {...item} />
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title='My Listings' />
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

export default React.memo(MyListings);