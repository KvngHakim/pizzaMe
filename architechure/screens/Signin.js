import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../theme/Theme';
import { authentication } from '../../Services/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function Signin({ navigation, route }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signin, setSignin] = useState(false)

    function signinUser() {
        signInWithEmailAndPassword(authentication,email,password)
        .then (re => {console.log(re),
            setSignin(true),
            navigation.navigate('Profile',{
                profileEmail: email,
                profileActive: signin
            })
            console.log('user signed in')
        }
            
        )
        .catch (error => console.error(error))
    }

    return (
        <View style={styles.container}>
            {/* <Text style={{fontSize: Theme.sizes[2]}} >Access your account</Text> */}
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
                onChangeText={(text) => { setEmail(text) }}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
                secureTextEntry={true}
                onChangeText={(text) => { setPassword(text) }}
            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Don't have an account?</Text>
                <Button color='white' style={styles.btn} mode='text'
                    onPress={() => {
                        navigation.navigate('Sign_up')
                    }}
                >Sign Up</Button>
            </View>
            <Button color='white' style={styles.btn} mode='text'
                onPress={signinUser}
            >Sign in</Button>
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
