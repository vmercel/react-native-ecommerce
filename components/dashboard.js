import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import DetailsScreen from '../pages/DetailsScreen';
import Logout from './logout';
//import MediaScreen from './MediaScreen';
//import Contact from './Profile/profile';
import ProfileCard from './profile';
//import Market from './market/Market';


import { ProductsList } from '../screens/ProductsList.js';
import { ProductDetails } from '../screens/ProductDetails.js';
import { Cart } from '../screens/Cart.js';
import { CartIcon } from './CartIcon.js';
import { CartProvider } from '../CartContext.js';


const Stack = createNativeStackNavigator();

function MarketStack() {
  return (
    <CartProvider>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
    </CartProvider>
  );
}


function HomeScreen() {
  return (
    //<MediaScreen />
    <MarketStack />
  );
}

function SettingsScreen() {
  return (
    //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Logout />
    //<View>
  );
}

function ProfileScreen() {
    return (
        <ProfileCard />
    );
  }

  function MarketScreen() {
    return (
  <CartProvider>
    <Stack.Navigator>
      <Stack.Screen name='Cart' component={Cart} 
      options={({ navigation }) => ({
        title: 'My cart',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => <CartIcon navigation={navigation}/>,
      })} />
    </Stack.Navigator>
</CartProvider>
        
    );
  }


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}
      />

<Tab.Screen name="Profile" component={ProfileScreen} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
      />

<Tab.Screen name="Market Area" component = {Cart}

          options={{
            headerShown: false,
            tabBarLabel: 'Shopping',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cart"
                color={color}
                size={size}
                
              />
            ),
            
          }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
              // Do something with the `navigation` object
              navigation.navigate('Home', {screen: 'Cart'}); 
            },
          })}
      />


<Tab.Screen name="Settings" component={SettingsScreen} 
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                name="menu"
                color={color}
                size={size}
                />
            ),
            }}
      />
    </Tab.Navigator>
  );
}

export default function Dashboard() {
  return (
    //<NavigationContainer>
      <MyTabs />
    //</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});