import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import ShoppingCart from './components/ShoppingCart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './components/CartContext';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen2'>
          <Stack.Screen name='Screen1' component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen 
            name='Screen2' 
            component={Screen2} 
            options={({ navigation }) => ({
              headerShown: true, 
              title: "Electronics", 
              headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => { navigation.navigate("ShoppingCart") }}>
                    <Image
                      source={require('./assets/img/cart.png')} // Link ảnh giỏ hàng
                      style={{ width: 35, height: 35, marginRight: 10 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./assets/img/avatar.jpg')} // Link ảnh đại diện
                      style={{ borderRadius: 10, width: 30, height: 30, marginRight: 10 }}
                    />
                  </TouchableOpacity>
                </View>
              ),
            })} 
          />
          <Stack.Screen name='ShoppingCart' component={ShoppingCart} options={{ title: "Cart" }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
