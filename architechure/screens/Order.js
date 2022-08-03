import { useState } from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../theme/Theme';


export function Order (navigation, route) {
    const {orderTotal, orderPizzaName, orderPizzaIngredients, orderPizzaSize} = route.params;

    return(
        <View style={styles.container}>
            {/* show customized pizza info here  */}
            {/* first name, last name, phone, email, address */}


            <Button mode='outlined' color='white'
                style={{ marginTop: 20, backgroundColor: Theme.colors.ui.primary }} contentStyle={{paddingVertical:20}}
                onPress={() => {
                    Alert.alert(
                        'Order Confirmation',
                        'We have recieved your order',
                        [{text: 'Accept', }, {}]
                    )
                }}
                >Complete Order


            </Button>



        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    }
})