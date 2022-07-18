import { useState } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { pizzas } from '../../assets/data/Pizzas';


export function customize() {
    const [selected,setSelected] = useState({});

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Customize your order</Text>

            {/* select a pizza to show ingredients */}
            <ScrollView horizontal>
                {Object.values(pizzas).map(singlePizza => (
                    <TouchableOpacity 
                    style={styles.selectedPizza}
                    onPress={() => {
                        setSelected(singlePizza.ingredients);
                    }}
                    >
                        <Text style={styles.selectedTitle}>{singlePizza.pizzaName}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>


            {/* ingredients based on selected pizza */}
            <View style={styles.pizzas}>
            {Object.values(selected).map(item => (
                    <TouchableOpacity style={[styles.pizza,{marginRight:Math.round(Math.random() * 100), marginLeft: Math.round(Math.random() * 100),}]}>
                    <Text style={styles.pizzaTitle}>{item.ingreName}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20, 
    },
    heading:{
        fontSize: 26,
        textAlign: 'center',
        color: '#519259',
        fontWeight: 'bold'
    },
    pizzas:{
        marginTop: 20,

    },
    pizza:{
        backgroundColor: '#FFBC80',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 50,
        
        marginBottom:5
    },
    pizzaTitle:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    selectedPizza:{
        backgroundColor: '#519259',
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10
    },
    selectedTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})