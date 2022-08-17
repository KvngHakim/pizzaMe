import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

export function Signup({navigation}) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Enter your First Name'
                style={styles.email}
            />
            <TextInput
                placeholder='Enter your Last Name'
                style={styles.email}
            />
            <TextInput
                placeholder='Enter your Phone Number'
                style={styles.email}
            />
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Sign_in')
                    }}
                >
                    <Text style={{}}>Sign in</Text>
                </TouchableOpacity>
                <Button color='white' style={styles.btn} mode='text'>Sign Up</Button>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
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
