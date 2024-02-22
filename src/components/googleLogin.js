import React from 'react';
import { Image, TouchableOpacity,StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
    const handleGoogleLogin = async () => {
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     console.log('userInfo :>>', userInfo)
        // } catch (error) {
        //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                
        //     } else if(error.code === statusCodes.IN_PROGRESS){

        //     } else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){

        //     } else{
                    
        //     }
        // }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleGoogleLogin}
            style={styles.container}
        >
            <Image
                style={styles.image}
                source={require('../assets/icons/google.png')}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3F4A59',
        borderRadius: 14,
        width: '45%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 50,
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default React.memo(GoogleLogin);
