import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/button";
import Input from "../../../components/input";
import axios from "axios";
import DropdownComponent from "../../../components/DropdownComponent";
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';

const NewListing = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);

    const [categories, setCategories] = useState([]);
    const [showCategoryList, setShowCategoryList] = useState(false);


    const onBack = () => {
        navigation.goBack();
    }

    const openImagePicker = () => {
        ImagePicker.openPicker({
            cropping: true,
        }).then(image => {
            console.log(image);
            setImage(image.path);
        }).catch(error => {
            console.log(error);
        });
    };

    const submitListing = async () => {
        try {           
            if (!title || !category || !price || !description) {
                Alert.alert("Vui lòng thêm đầy đủ thông tin");
                return;
            }
            const response = await axios.post("http://192.168.11.1:3000/products", {
                title,
                category,
                price,
                description,
                image
            });
            console.log("Listing submitted successfully:", response.data);
            Alert.alert('Thông báo', 'Thêm thành công')
            setTitle('');
            setCategory('');
            setPrice('');
            setDescription('');
            setImage('');
        } catch (error) {
            console.error("Error submitting listing:", error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://192.168.11.1:3000/categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onBack}>
                    <Image style={styles.icon} source={require('../../../assets/icons/logout_left.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Create A New Listing</Text>
            </View>
            <View>
                <Text style={styles.upload}>Uploads photos</Text>
            </View>
            {/* upload */}
            <View style={styles.containerUpload}>
                <TouchableOpacity style={styles.uploadphoto} onPress={openImagePicker}>
                    <TouchableOpacity style={styles.uploadEllip}>
                        <Image source={require('../../../assets/icons/ellip.png')} />
                    </TouchableOpacity>
                    <Image style={styles.uploadIcon} source={require('../../../assets/icons/+.png')} />
                </TouchableOpacity>
                <View style={styles.imgUpload}>
                    {image && <Image source={{ uri: image }} style={styles.uploadImage} />}
                    <TouchableOpacity style={styles.iconxContainer} onPress={() => setImage(null)}>
                        <Image style={styles.iconx} source={require('../../../assets/icons/Shape.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* title */}
            <View>
                <Input label='Title' placeholder='Listing Title' value={title} onChangeText={setTitle} />
            </View>
            {/* category */}
            <View style={{ position: 'relative' }}>
                <Input
                    label='Category'
                    placeholder='Select the category'
                    value={category}
                />
                {showCategoryList && (
                    <ScrollView style={styles.categoryList}>
                        {categories.map((category) => (
                            <TouchableOpacity
                                key={category.id}
                                style={styles.categoryItem}
                                onPress={() => {
                                    setCategory(category.title);//cập nhật giá trị biến với tiêu đề được nhấn
                                    setShowCategoryList(false);//ẩn danh sách
                                }}
                            >
                                <Text>{category.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
                <TouchableOpacity
                    onPress={() => setShowCategoryList(!showCategoryList)}
                    style={{ position: 'absolute', right: 10, top: 50, zIndex: 1 }}>
                    <Image source={require('../../../assets/icons/bottom.png')} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            {/* price */}
            <View>
                <Input label='Price' placeholder='Enter price in USD' value={price} onChangeText={setPrice} />
            </View>
            {/* description */}
            <View>
                <Input style={styles.description} label='Description' placeholder='Tell us more...' value={description} onChangeText={setDescription} />
            </View>
            <Button title='Submit' onPress={submitListing}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: '#303030',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    upload: {
        fontSize: 14,
        color: '#4F63AC',
        marginTop: 20,
        marginBottom: 10
    },
    containerUpload: {
        flexDirection: 'row'
    },
    uploadImage: {
        width: 90,
        height: 90
    },
    uploadEllip: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }],
    },
    uploadphoto: {
        width: 90,
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderStyle: 'dashed', // Đặt kiểu đường viền là đứt
        borderWidth: 1,
        borderColor: '#909191',
        position: 'relative',
        marginRight: 10
    },
    uploadIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -8 }, { translateY: -9 }],
    },
    imgUpload: {
        width: 90,
        height: 90,
        position: 'relative',
    },
    iconxContainer: {
        position: 'absolute',
        top: -10,
        right: -10,
    },
    iconx: {
        width: 24,
        height: 24
    },
    description: {
        height: 150
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    categoryList: {
        maxHeight: 180,
        borderColor: '#909191',
        borderWidth: 1,
        padding: 8,
    },
    categoryItem: {
        padding: 8,
        borderBottomColor: '#909191',
        borderBottomWidth: 1,
    },
});

export default React.memo(NewListing);