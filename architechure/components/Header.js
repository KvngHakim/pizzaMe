import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useFonts, Pacifico_400Regular, } from '@expo-google-fonts/Pacifico';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import {Theme} from '../theme/Theme';

export function Header() {
    // let [FontsLoaded] = useFonts({
    //     Pacifico_400Regular
    // });

    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Text style={styles.brandName}>PizzaMe</Text>
            </View>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faArrowRightToBracket} size={Theme.points[4]} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Theme.points[2]
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
        fontSize: Theme.points[4],
        fontWeight: 'bold',
        // fontFamily: 'Pacifico_400Regular'

    },
})