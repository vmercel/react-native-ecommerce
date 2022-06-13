// App.js
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';

const Stack = createStackNavigator();


function MyStack() {
    return ( < Stack.Navigator initialRouteName = "Signup"
        screenOptions = {
            {
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3740FE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        } >
        <
        Stack.Screen name = "Signup"
        component = { Signup }
        options = {
            { title: 'Signup' }
        }
        />        <
        Stack.Screen name = "Login"
        component = { Login }
        options = {
            { title: 'Login' },
            { headerLeft: null }
        }
        /> <Stack.Screen name = "Dashboard"
        component = { Dashboard }
        options = {
            { title: 'Dashboard' },
            { headerLeft: null }
        }
        />

        <Stack.Screen name = 'Products'
        component = { ProductsList }
        options = {
            ({ navigation }) => ({
                title: 'Products',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => < CartIcon navigation = { navigation }
                />
            })
        }
        /> <Stack.Screen name = 'ProductDetails'
        component = { ProductDetails }
        options = {
            ({ navigation }) => ({
                title: 'Product details',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => < CartIcon navigation = { navigation }
                />,
            })
        }
        /> <Stack.Screen name = 'Cart'
        component = { Cart }
        options = {
            ({ navigation }) => ({
                title: 'My cart',
                headerTitleStyle: styles.headerTitle,
                headerRight: () => < CartIcon navigation = { navigation }
                />,
            })
        }
        />

        </Stack.Navigator>
    );
}

export default function App() {
    return ( 
    <NavigationContainer >
        <MyStack/>
    </NavigationContainer>
    );
}