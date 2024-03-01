import React from 'react';
import { View, Image } from 'react-native';
import Splash from './src/screens/auth/splash';
import SignUp from './src/screens/auth/signup';
import SignIn from './src/screens/auth/SignIn';
import Home from "./src/screens/app/Home"
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile"
import Settings from './src/screens/app/Settings';
import NewListing from './src/screens/app/CreatANewListings'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Product from './src/screens/app/Product';
import MyListings from './src/screens/app/MyListings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = focused
                            ? require('./src/assets/tabs/home_active.png')
                            : require('./src/assets/tabs/home.png');
                    } else if (route.name === 'Profile') {
                        icon = focused
                            ? require('./src/assets/tabs/profile_active.png')
                            : require('./src/assets/tabs/profile.png');
                    } else if (route.name === 'Favorites') {
                        icon = focused
                            ? require('./src/assets/tabs/bookmark_active.png')
                            : require('./src/assets/tabs/bookmark.png');
                    }
                    // You can return any component that you like here!
                    return <Image style={{ width: 24, height: 24 }} source={icon} />;
                },
            })}
            tabBarOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { borderTopColor: '#DADADA' },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false } } />
            {/* thay đổi component */}
        </Tab.Navigator>
    );
};

const App = () => {
    const isSignedIn = false;
    return (
      <NavigationContainer>
        <Stack.Navigator >
          {isSignedIn ? (
            <>
              <Stack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
            </>
          ) : (   
            <>
              <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
              <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
              <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
              <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />
              <Stack.Screen name="NewListing" component={NewListing} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      // <NewListing></NewListing>
    );
  };

export default App;