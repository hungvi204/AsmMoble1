import React ,{ useState, useEffect } from "react"
import { ScrollView, StyleSheet, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../../components/header"
import { products } from "../../../data/product"
import ProductProfileItem from "../../../components/productMyListingsItem"
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import ProductMyListingsItem from "../../../components/productMyListingsItem"
import axios from "axios"

const MyListings = () => {
    const isFocused = useIsFocused();
    const [products, setProduct] = useState([]);

    const renderProductItem = ({ item }) => {
        return <ProductMyListingsItem {...item} onDelete={() => deleteProduct(item.id)}/>
    }

    const getAPI = async () => {
        try {
            const response = await axios.get("http://192.168.11.1:3000/products");
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching favorite products:", error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            console.log(productId)
            await axios.delete(`http://192.168.11.1:3000/products/${productId}`);
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