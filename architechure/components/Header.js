import { View, Image, Text, StyleSheet } from 'react-native';
// import { useFonts, Pacifico_400Regular, } from '@expo-google-fonts/Pacifico';


export function Header() {
    // let [FontsLoaded] = useFonts({
    //     Pacifico_400Regular
    // });

    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Image
                    source={require('../../assets/images/pizza.png')}
                    style={styles.logo}
                />
                <Text style={styles.brandName}>PizzaMe</Text>
            </View>
            <Image
                source={require('../../assets/images/enter.png')}
                style={styles.signinIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    brand: {
        flexDirection: 'row'
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 5
    },
    signinIcon: {
        width: 48,
        height: 48
    },
    brandName: {
        fontSize: 32,
        fontWeight: 'bold',
        // fontFamily: 'Pacifico_400Regular'

    },
})