import { useState } from 'react';
import * as React from 'react';
import { View, Text, StyleSheet, Alert, Image, TextInput } from 'react-native';
import { Button, } from 'react-native-paper';
import { Theme } from '../theme/Theme';
import { db } from '../../Services/Firebase';
import { doc, setDoc , updateDoc, addDoc, collection} from 'firebase/firestore';

export function Order({ navigation, route }) {

    const {orderTotal, orderPizzaName, orderPizzaIngredients, orderPizzaSize} = route.params

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    function create() {
        const now = new Date();
        const nowTimestamp = now.getTime(); 

        addDoc(collection(db, 'purchases', 'PwF3Kg2ojnyzduiV8CEa'), {
            address: address,
            email: email,
            firstname: firstName,
            ingredients: '',
            lastname: lastName,
            phone: Phone,
            pizzaname: 'vfghr',
            price: 'wrfwefewf',
            size: 'wefwefw',
            timestamp: nowTimestamp,
        })
        .then(() => {
            Alert.alert(
                'Order Confirmation',
                'We have recieved your order.',
                [{ text: 'Okay, Thanks', onPress: () => {navigation.navigate('Home')} }]
            )
        })
        .catch(() => {

        })
    }

    //update document on firestore
    function updateDocument () {
        updateDoc(doc(db,'purchases','PwF3Kg2ojnyzduiV8CEa' ),{

        }).then(() => console.log('Record Updated'))
        .catch(error => console.log('Error messsage',error))
    }

    return (
        <View style={styles.container}>
            {/* show customized pizza info here  */}
            <View style={styles.infoCont}>
                <View >
                    <Image style={styles.img} source={require('../../assets/images/pizza.png')} />
                </View>

                <View style={styles.pizzaInfo}>
                    <Text style={styles.pizzameName}></Text>
                    <Text style={styles.pizzameSpices}></Text>
                </View>

                <View style={styles.billSect}>
                    <Text style={styles.bill}></Text>
                </View>

                <View style={styles.sizeSect}>
                    <Text style={styles.sizes}></Text>
                </View>
            </View>

            {/* first name, last name, phone, email, address */}
            
                <View style={styles.delivery}>
                    <Text style={styles.heading}>Order {orderPizzaName} pizza</Text>
                    <TextInput keyboardType='default' placeholder="first name" style={styles.input}
                        onChangeText={(fname) => { setFirstName(fname) }} />
                    <TextInput keyboardType='default' placeholder="last name" style={styles.input}
                        onChangeText={(lname) => { setLastName(lname) }} />
                    <TextInput keyboardType='email-address' placeholder="email adress" style={styles.input}
                        onChangeText={(email) => { setEmail(email) }} />
                    <TextInput keyboardType='numeric' placeholder="phone number" style={styles.input}
                        onChangeText={(phone) => { setPhone(phone) }} />
                    <TextInput keyboardType='default' placeholder="Address" style={styles.input}
                        onChangeText={(phone) => { setAddress(phone) }} />
                </View>

            


            <Button mode='outlined' color='white'
                style={{ marginTop: 20, backgroundColor: Theme.colors.ui.primary }} contentStyle={{ paddingVertical: 20 }}
                onPress={updateDocument}
            >Complete Order


            </Button>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        flex:1
    },
    delivery:{
        justifyContent: 'space-evenly'
    },
    input:{
        borderWidth:1,
        borderColor:'gray',
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:50,
        marginBottom:10,
        backgroundColor:'#fff'
        
    },
    heading:{
        fontSize:28,
        textAlign:'center',
        marginBottom:16
    },
    orderNow:{
        paddingHorizontal:10,
        paddingVertical:12,
        borderRadius:50,
        backgroundColor:'#064635' 
    },
    orderNowText:{
        fontSize:28,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff'
    },
    img: {
        height: 150,
        width: 150,
    }
})


