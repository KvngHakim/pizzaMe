import { useState } from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { Button, } from 'react-native-paper';
import { Theme } from '../theme/Theme';


export function Order({ route, navigation }) {
    //  const { orderTotal, orderPizzaName, orderPizzaIngredients, orderPizzaSize } = route.params;

    return (
        <View style={styles.container}>
            {/* show customized pizza info here  */}
            {/* <View style={styles.infoCont}>
                <View >
                    <Image style={styles.img} source={require('../../assets/images/pizza.png')} />
                </View>

                <View style={styles.pizzaInfo}>
                    <Text style={styles.pizzameName }>{orderPizzaName}</Text>
                    <Text style={styles.pizzameSpices}>{orderPizzaIngredients}</Text>
                </View>

                <View style={styles.billSect}>
                    <Text style={styles.bill}>{orderTotal}</Text>
                </View>

                <View style={styles.sizeSect}>
                    <Text style={styles.sizes}>{orderPizzaSize}</Text>
                </View>
            </View> */}

            {/* first name, last name, phone, email, address */}
            <View>
                <form>
                    <View>
                        <Text>Fill in your details below</Text>
                    </View>

                    <View style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <View style={{ padding: 5 }}>
                            <label >
                                First Name:
                                <input type="text" />
                            </label>
                        </View>

                        <View style={{ padding: 5 }}>
                            <label>
                                Last Name:
                                <input type="text" />
                            </label>
                        </View>

                        <View style={{ padding: 5 }}>
                            <label>
                                Phone Number:
                                <input type="text" />
                            </label>
                        </View>

                        <View style={{ padding: 5 }}>
                            <label>
                                Address:
                                <input type="text" />
                            </label>
                        </View>

                        <View style={{ padding: 5 }}>
                            <label>
                                Email Address:
                                <input type="text" />
                            </label>
                        </View>
                    </View>
                </form>
            </View>


            <Button mode='outlined' color='white'
                style={{ marginTop: 20, backgroundColor: Theme.colors.ui.primary }} contentStyle={{ paddingVertical: 20 }}
                onPress={() => {
                    Alert.alert(
                        'Order Confirmation',
                        'We have recieved your order',
                        [{ text: 'Accept' }]
                    )
                }}
            >Complete Order


            </Button>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    img:{
        height: 150,
        width: 150,
        borderRadius: 50
    }
})