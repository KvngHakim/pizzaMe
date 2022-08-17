import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { authentication } from '../../Services/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function Signup({ navigation }) {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    function createUser() {
        createUserWithEmailAndPassword(authentication,email,password)
        .then (re => console.log(re))
        .catch (error => console.error(error))
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter your First Name'
                style={styles.email}
                onChangeText={(text) => { setFname(text) }}
            />
            <TextInput
                placeholder='Enter your Last Name'
                style={styles.email}
                onChangeText={(text) => { setLname(text) }}
            />
            <TextInput
                placeholder='Enter your Phone Number'
                style={styles.email}
                onChangeText={(text) => { setPhone(text) }}
            />
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
                onChangeText={(text) => { setEmail(text) }}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
                onChangeText={(text) => { setPassword(text) }}
            />
            <TextInput
                placeholder='Re-enter your Password'
                style={styles.passWord}
                onChangeText={(text) => { setRepassword(text) }}
            />

            <Button color='white' style={styles.btn} mode='text'
                onPress={createUser}
            >Register</Button>

            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Sign_in')
                    }}
                >
                    <Text style={{ fontSize: 32 }}>Sign in</Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignContent: 'center'
    },
    email: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    passWord: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    signinText: {

        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signinBar: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {

    }
})
