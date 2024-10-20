import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native';
import { CartContext } from './CartContext';
import Toast from 'react-native-toast-message';

const ShoppingCart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const [quantities, setQuantities] = useState(cart.reduce((acc, product) => {
        acc[product.id] = 1; // Mặc định số lượng là 1
        return acc;
    }, {}));
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Tính tổng số tiền khi giỏ hàng hoặc số lượng thay đổi
        const calculateTotal = () => {
            let newTotal = 0;
            cart.forEach(product => {
                newTotal += product.price * quantities[product.id];
            });
            setTotal(newTotal);
        };

        calculateTotal();
    }, [cart, quantities]);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const newQuantities = { ...quantities };
        delete newQuantities[productId]; 
        setQuantities(newQuantities);
        // Toast.show({
        //     type: 'info',
        //     text1: 'Removed from cart!',
        //     text2: `Product has been removed from your cart.`
        // });
    };

    const handleClearCart = () => {
        clearCart();
        setQuantities({}); // Reset số lượng khi giỏ hàng được xóa
        setTotal(0); // Reset tổng số tiền khi giỏ hàng được xóa
        Toast.show({
            type: 'info',
            text1: 'Payment sucessfull',
            text2: `Payment sucessfull`
        });
    };

    const handleIncreaseQuantity = (productId) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: prev[productId] + 1,
        }));
    };

    const handleDecreaseQuantity = (productId) => {
        setQuantities((prev) => {
            if (prev[productId] > 1) {
                return {
                    ...prev,
                    [productId]: prev[productId] - 1,
                };
            }
            return prev; // Không giảm xuống dưới 1
        });
    };

    return (
        <ScrollView style={styles.container}>
            {cart.length === 0 ? (
                <View style={styles.emptyCart}>
                    <Text>Your cart is empty</Text>
                </View>
            ) : (
                <>
                    {cart.map((product) => (
                        <View key={product.id} style={styles.productContainer}>
                            <Image style={styles.productImage} source={product.img} />
                            <View style={styles.productDetails}>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productPrice}>${product.price}</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems: 'center'}}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => handleDecreaseQuantity(product.id)}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>-</Text>
                                </TouchableOpacity>
                                <TextInput
                                    style={{ marginHorizontal: 5, width: 30, borderWidth: 1, textAlign: 'center' }}
                                    value={`${quantities[product.id]}`}
                                    editable={false} // Không cho phép người dùng chỉnh sửa trực tiếp
                                />
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => handleIncreaseQuantity(product.id)}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => handleRemoveFromCart(product.id)} style={styles.removeButton}>
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.clearCartButton} onPress={handleClearCart}>
                        <Text style={styles.clearCartButtonText}>Payment</Text>
                    </TouchableOpacity>
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    emptyCart: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 2,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
    },
    removeButton: {
        backgroundColor: '#ff6b6b',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft:5
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        
    },
    clearCartButton: {
        backgroundColor: '#ffcc00',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    clearCartButtonText: {
        fontWeight: 'bold',
    },
    quantityButton: {
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ffcc00',
    },
    totalContainer: {
        marginTop: 20,
        alignItems: 'flex-end', // Đưa tổng tiền về phía bên phải
    },
    totalText: {
        fontSize: 23,
        fontWeight: 'bold',
    },
});

export default ShoppingCart;
